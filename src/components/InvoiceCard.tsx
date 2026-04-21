import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import type { Invoice } from "../types/invoice";
import StatusBadge from "./StatusBadge";
import { formatCurrency } from "../utils/formatCurrency";

interface InvoiceCardProps {
  invoice: Invoice;
}

function InvoiceCard({ invoice }: InvoiceCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className={`grid grid-cols-[1fr_auto] gap-x-4 gap-y-6 rounded-lg px-6 py-6 transition hover:border-[#7C5DFA] md:flex md:items-center md:gap-6 md:px-8 md:py-4 ${
        isDark
          ? "border border-transparent bg-[#1E2139]"
          : "border border-transparent bg-white shadow-[0_10px_10px_-10px_rgba(72,84,159,0.100397)]"
      }`}
    >
      <div className="space-y-6 md:flex md:w-full md:items-center md:justify-between md:space-y-0">
        <div className="grid grid-cols-[1fr_auto] gap-y-6 md:flex md:min-w-0 md:flex-1 md:items-center md:gap-10">
          <div className="space-y-6 md:flex md:min-w-0 md:items-center md:gap-10 md:space-y-0">
            <div className="space-y-6 md:flex md:min-w-0 md:items-center md:gap-10 md:space-y-0">
              <p
                className={`text-[15px] font-bold tracking-[-0.25px] ${
                  isDark ? "text-white" : "text-[#0C0E16]"
                }`}
              >
                <span className="text-[#7E88C3]">#</span>
                {invoice.id}
              </p>

              <p
                className={`text-[13px] font-medium ${
                  isDark ? "text-[#DFE3FA]" : "text-[#888EB0]"
                }`}
              >
                Due {invoice.paymentDue}
              </p>

              <p
                className={`hidden text-[13px] font-medium md:block ${
                  isDark ? "text-[#DFE3FA]" : "text-[#858BB2]"
                }`}
              >
                {invoice.clientName}
              </p>
            </div>

            <p
              className={`text-[13px] font-medium md:hidden ${
                isDark ? "text-[#DFE3FA]" : "text-[#858BB2]"
              }`}
            >
              {invoice.clientName}
            </p>
          </div>

          <p
            className={`text-right text-[16px] font-bold tracking-[-0.8px] md:text-left ${
              isDark ? "text-white" : "text-[#0C0E16]"
            }`}
          >
            {formatCurrency(invoice.total)}
          </p>
        </div>

        <div className="col-span-2 flex items-center justify-between md:col-auto md:justify-end md:gap-5">
          <StatusBadge status={invoice.status} />

          <ChevronRight
            size={18}
            className="hidden text-[#7C5DFA] md:block"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </Link>
  );
}

export default InvoiceCard;
