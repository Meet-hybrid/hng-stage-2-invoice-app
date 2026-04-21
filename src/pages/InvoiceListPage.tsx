import rawInvoices from "../data/data.json";
import InvoiceCard from "../components/InvoiceCard";
import type { Invoice } from "../types/invoice";
import { ChevronDown } from "lucide-react";

const invoices = rawInvoices as Invoice[];

function InvoiceListPage() {
  return (
    <section className="mx-auto w-full max-w-3xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Invoices
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            There are {invoices.length} total invoices
          </p>
        </div>

        <div className="flex items-center gap-10">
          <button
            type="button"
            className="flex items-center gap-3 text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]"
          >
            <span>Filter by status</span>
            <ChevronDown className="h-4 w-4 text-violet-500" />
          </button>

          <button
            type="button"
            className="flex h-12 items-center rounded-full bg-[#7C5DFA] px-2 pr-4 text-white transition hover:bg-[#9277FF]"
          >
            <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[20px] font-bold text-[#7C5DFA]">
              +
            </span>
            <span className="text-[15px] font-bold tracking-[-0.25px]">
              New Invoice
            </span>
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
