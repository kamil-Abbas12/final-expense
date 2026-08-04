import nodemailer from "nodemailer";

// Requires env vars in .env.local:
//   GMAIL_USER=youraccount@gmail.com
//   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx   (Google Account -> Security -> App Passwords)
//   LEADS_TO_EMAIL=topdogleadsbackend@gmail.com   (optional override, defaults below)

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const LEADS_TO_EMAIL = process.env.LEADS_TO_EMAIL || "topdogleadsbackend@gmail.com";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD not configured");
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });
  }
  return transporter;
}

export interface LeadEmailData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dob: string;
  hasInsurance: string;
  preferredTime: string;
  ipAddress: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildLeadHtml(data: LeadEmailData) {
  const rows: Array<[string, string]> = [
    ["Name", `${data.firstName} ${data.lastName}`],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Address", data.address],
    ["City", data.city],
    ["State", data.state],
    ["ZIP", data.zip],
    ["Date of Birth", data.dob],
    ["Existing Coverage / Amount", data.hasInsurance],
    ["Preferred Call Time", data.preferredTime],
    ["IP Address", data.ipAddress],
    ["Submitted At", new Date().toISOString()],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;color:#374151;">${escapeHtml(
          label
        )}</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#111827;">${escapeHtml(
          value || "-"
        )}</td>
      </tr>`
    )
    .join("");

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
    <h2 style="color:#059669;">New Final Expense Lead</h2>
    <table style="border-collapse:collapse;width:100%;">
      ${rowsHtml}
    </table>
  </div>`;
}

/**
 * Sends the new-lead notification to the internal leads inbox.
 */
export async function sendLeadNotificationEmail(data: LeadEmailData) {
  const t = getTransporter();
  await t.sendMail({
    from: `"TopInstantQuotes Leads" <${GMAIL_USER}>`,
    to: LEADS_TO_EMAIL,
    subject: `New Lead: ${data.firstName} ${data.lastName} (${data.zip})`,
    html: buildLeadHtml(data),
  });
}

/**
 * Sends an auto-reply confirmation to the person who submitted the form.
 */
export async function sendLeadAutoReplyEmail(data: LeadEmailData) {
  if (!data.email) return; // nothing to send to
  const t = getTransporter();
  await t.sendMail({
    from: `"TopInstantQuotes" <${GMAIL_USER}>`,
    to: data.email,
    subject: "We received your quote request",
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <p>Hi ${escapeHtml(data.firstName) || "there"},</p>
        <p>Thanks for requesting a free quote. We've received your information and a licensed agent will contact you shortly${
          data.preferredTime ? ` during your preferred time window (${escapeHtml(data.preferredTime)})` : ""
        }.</p>
        <p>If you'd like to speak with someone right away, feel free to call us directly.</p>
        <p style="margin-top:24px;color:#6b7280;font-size:12px;">This is an automated confirmation — no need to reply to this email.</p>
      </div>`,
  });
}