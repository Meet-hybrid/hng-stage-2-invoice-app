import rawInvoices from "../data/data.json";
import InvoiceCard from "../components/InvoiceCard";
import type { Invoice } from "../types/invoice";
import { ChevronDown, Plus } from "lucide-react";

const invoices = rawInvoices as Invoice[];

function InvoiceListPage() {
  return (
    <section className="mx-auto w-full max-w-182.5 xl:max-w-190">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-[32px] font-bold leading-none tracking-[-1px] text-[#0C0E16]">
            Invoices
          </h1>

          <p className="mt-2 text-[13px] font-medium leading-3.75 text-[#888EB0]">
            There are {invoices.length} total invoices
          </p>
        </div>

        <div className="flex items-center gap-10">
          <button
            type="button"
            className="hidden items-center gap-4 text-[15px] font-bold text-[#0C0E16] md:inline-flex"
          >
            <span>Filter by status</span>
            <ChevronDown
              size={18}
              className="text-[#7C5DFA]"
              strokeWidth={2.5}
            />
          </button>

          <button
            type="button"
            className="inline-flex h-12 items-center rounded-full bg-[#7C5DFA] pl-2 pr-4 text-[15px] font-bold text-white transition hover:bg-[#9277FF]"
          >
            <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <Plus size={16} className="text-[#7C5DFA]" strokeWidth={3} />
            </span>
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      <div className="mt-14 space-y-4">
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </section>
  );
}

export default InvoiceListPage;
