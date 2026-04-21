import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import type { Invoice } from "../types/invoice";
import StatusBadge from "./StatusBadge";

interface InvoiceCardProps {
  invoice: Invoice;
}

function InvoiceCard({ invoice }: InvoiceCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className={`block rounded-lg border border-transparent px-6 py-6 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.1004)] transition hover:border-[#7C5DFA] md:px-8 md:py-7 ${
        isDark ? "bg-[#1E2139]" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[100px_140px_1fr_110px_120px_20px] md:items-center md:gap-6">
        <h2
          className={`text-[15px] font-bold tracking-[-0.25px] ${
            isDark ? "text-white" : "text-[#0C0E16]"
          }`}
        >
          <span className="text-[#7E88C3]">#</span>
          {invoice.id}
        </h2>

        <p
          className={`text-[13px] font-medium tracking-[-0.1px] ${
            isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
          }`}
        >
          <span className={isDark ? "text-[#888EB0]" : "text-[#888EB0]"}>
            Due{" "}
          </span>
          {invoice.paymentDue}
        </p>

        <p
          className={`text-[13px] font-medium tracking-[-0.1px] ${
            isDark ? "text-[#DFE3FA]" : "text-[#858BB2]"
          }`}
        >
          {invoice.clientName}
        </p>

        <p
          className={`text-[16px] font-bold tracking-[-0.8px] md:text-right ${
            isDark ? "text-white" : "text-[#0C0E16]"
          }`}
        >
          £ {invoice.total.toFixed(2)}
        </p>

        <div className="md:justify-self-end">
          <StatusBadge status={invoice.status} />
        </div>

        <div className="hidden md:flex md:justify-self-end">
          <ChevronRight
            size={20}
            className="text-[#7C5DFA]"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </Link>
  );
}

export default InvoiceCard;
