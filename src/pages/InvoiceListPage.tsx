import { ChevronDown, Plus } from "lucide-react";
import rawInvoices from "../data/data.json";
import InvoiceCard from "../components/InvoiceCard";
import { useTheme } from "../hooks/useTheme";
import type { Invoice } from "../types/invoice";

const invoices = rawInvoices as Invoice[];

function InvoiceListPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="mx-auto w-full max-w-182.5">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1
            className={`text-3xl font-bold leading-none md:text-4xl ${
              isDark ? "text-white" : "text-[#0C0E16]"
            }`}
          >
            Invoices
          </h1>

          <p
            className={`mt-2 text-sm font-medium ${
              isDark ? "text-[#DFE3FA]" : "text-[#888EB0]"
            }`}
          >
            There are {invoices.length} total invoices
          </p>
        </div>

        <div className="flex items-center gap-5 self-start md:self-auto">
          <button
            type="button"
            className={`flex items-center gap-3 text-sm font-bold transition ${
              isDark ? "text-white" : "text-[#0C0E16]"
            }`}
          >
            <span>Filter by status</span>
            <ChevronDown size={18} className="text-[#7C5DFA]" />
          </button>

          <button
            type="button"
            className="inline-flex h-12 items-center gap-4 rounded-full bg-[#7C5DFA] pl-2 pr-4 text-sm font-bold text-white transition hover:bg-[#9277FF]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <Plus size={16} className="text-[#7C5DFA]" strokeWidth={3} />
            </span>
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </section>
  );
}

export default InvoiceListPage;
