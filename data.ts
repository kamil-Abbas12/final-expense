import {
  CheckCircle,
  DollarSign,
  ShieldCheck,
  Zap,
  Heart,
  FileText,
  CreditCard,
  Home,
  Gift,
  Award,
  Users,
  BadgeCheck,
} from "lucide-react";

export const features = [
  { label: "No Medical Exam Required", icon: CheckCircle },
  { label: "Fixed Premiums for Life", icon: DollarSign },
  { label: "Guaranteed Acceptance", icon: ShieldCheck },
  { label: "Fast payout for your loved ones", icon: Zap },
];

export const valueCards = [
  {
    title: "Protect Your Loved Ones from Debt",
    text: "Final expense insurance covers funeral costs and bills, with benefits paid directly. Give your family the freedom to grieve without financial stress.",
  },
  {
    title: "Protect Against Every Final Expense",
    text: "Funeral costs range $8,300–$12,000. Insurance guarantees coverage, sparing loved ones from financial strain during difficult times.",
  },
  {
    title: "Lift the Burden from Family",
    text: "Outstanding bills and debts don't vanish. Your policy provides protection, ensuring obligations are managed without falling on loved ones.",
  },
];

export const coverageItems = [
  {
    title: "Funeral & Burial Costs",
    text: "Casket, vault, burial plot, or cremation services",
    icon: CheckCircle,
  },
  {
    title: "Memorial Services",
    text: "Flowers, reception, obituary, and ceremony fees",
    icon: Heart,
  },
  {
    title: "Medical Bills",
    text: "Outstanding hospital and healthcare expenses",
    icon: FileText,
  },
  {
    title: "Debt Repayment",
    text: "Credit cards, loans, and other obligations",
    icon: CreditCard,
  },
  {
    title: "Household Expenses",
    text: "Rent, utilities, and daily living costs for your family",
    icon: Home,
  },
  {
    title: "Anything Your Family Needs",
    text: "Flexible - beneficiary decides how funds are used",
    icon: Gift,
  },
];

export const benefits = [
  { value: "$10K–$25K", label: "Typical Coverage Amount" },
  { value: "No Exam", label: "Simple health questions only" },
  { value: "Fixed Rates", label: "Premiums never increase" },
  { value: "24–72 Hrs", label: "Fast claim payouts" },
  { value: "Lifetime", label: "Coverage never expires" },
];

export const faqs = [
  {
    question: "What exactly is final expense insurance?",
    answer:
      "A simple life insurance policy designed to cover funeral, burial, and other end-of-life expenses.",
  },
  {
    question: "Do applicants have to complete a medical exam?",
    answer:
      "No exam! Answer simple health questions and qualify - even with pre-existing conditions.",
  },
  {
    question: "Who can I appoint as my beneficiary?",
    answer:
      "Anyone - a spouse, child, sibling, friend, or even a charity. Benefits are paid directly to your named beneficiary and can be used for any purpose they choose.",
  },
  {
    question: "Will my premiums increase over time?",
    answer:
      "Never. Your premium is locked for life, and your coverage stays the same - simple, predictable protection.",
  },
  {
    question: "How fast are claims processed and paid?",
    answer:
      "Most claims are paid within 24–72 hours after documents are received, giving your beneficiaries quick access to funds.",
  },
];

export const trustItems = [
  { badge: "A+ Rated", sub: "by AM Best" },
  { badge: "BBB", sub: "Accredited Business" },
  { badge: "25+ Years", sub: "Serving families nationwide" },
];

export const proofItems = [
  { label: "A+ Rated Insurance Partners", icon: Award },
  { label: "25+ Years Serving Families", icon: Users },
  { label: "Licensed & Trusted Nationwide", icon: BadgeCheck },
];