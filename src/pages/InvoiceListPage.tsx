import rawInvoices from "../data/data.json";
import InvoiceCard from "../components/InvoiceCard";
import type { Invoice } from "../types/invoice";

const invoices = rawInvoices as Invoice[];

function InvoiceListPage() {
  return (
    <section className="p-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>

          <p className="mt-2 text-sm text-gray-500">
            There are {invoices.length} total invoices
          </p>
        </div>

        <button className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
          New Invoice
        </button>
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
