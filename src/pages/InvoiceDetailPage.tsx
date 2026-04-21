import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import rawInvoices from "../data/data.json";
import StatusBadge from "../components/StatusBadge";
import type { Invoice } from "../types/invoice";

const invoices = rawInvoices as Invoice[];

function InvoiceDetailPage() {
  const { id } = useParams();

  const invoice = invoices.find((item) => item.id === id);

  if (!invoice) {
    return (
      <section className="mx-auto w-full max-w-182.5 xl:max-w-190">
        <Link
          to="/"
          className="inline-flex items-center gap-4 text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]"
        >
          <ArrowLeft size={16} className="text-[#7C5DFA]" strokeWidth={2.5} />
          <span>Go back</span>
        </Link>

        <div className="mt-10 rounded-lg bg-white p-8 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.1004)]">
          <h1 className="text-[24px] font-bold text-[#0C0E16]">
            Invoice not found
          </h1>
          <p className="mt-3 text-[13px] text-[#888EB0]">
            The invoice you are trying to view does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-182.5 xl:max-w-190">
      <Link
        to="/"
        className="inline-flex items-center gap-4 text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]"
      >
        <ArrowLeft size={16} className="text-[#7C5DFA]" strokeWidth={2.5} />
        <span>Go back</span>
      </Link>

      <div className="mt-8 flex flex-col gap-6 rounded-lg bg-white px-6 py-6 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.1004)] md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center justify-between md:gap-5">
          <p className="text-[13px] font-medium text-[#858BB2]">Status</p>
          <StatusBadge status={invoice.status} />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="inline-flex h-12 items-center rounded-full bg-[#F9FAFE] px-6 text-[15px] font-bold text-[#7E88C3] transition hover:bg-[#DFE3FA]"
          >
            Edit
          </button>

          <button
            type="button"
            className="inline-flex h-12 items-center rounded-full bg-[#EC5757] px-6 text-[15px] font-bold text-white transition hover:bg-[#FF9797]"
          >
            Delete
          </button>

          {invoice.status === "pending" && (
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-full bg-[#7C5DFA] px-6 text-[15px] font-bold text-white transition hover:bg-[#9277FF]"
            >
              Mark as Paid
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-white px-6 py-8 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.1004)] md:px-8 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]">
              <span className="text-[#7E88C3]">#</span>
              {invoice.id}
            </h1>
            <p className="mt-2 text-[13px] font-medium text-[#888EB0]">
              {invoice.description}
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-[13px] font-medium text-[#888EB0]">
              {invoice.senderAddress.street}
            </p>
            <p className="mt-1 text-[13px] font-medium text-[#888EB0]">
              {invoice.senderAddress.city}
            </p>
            <p className="mt-1 text-[13px] font-medium text-[#888EB0]">
              {invoice.senderAddress.postCode}
            </p>
            <p className="mt-1 text-[13px] font-medium text-[#888EB0]">
              {invoice.senderAddress.country}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
          <div className="space-y-8">
            <div>
              <p className="text-[13px] font-medium text-[#7E88C3]">
                Invoice Date
              </p>
              <p className="mt-3 text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]">
                {invoice.createdAt}
              </p>
            </div>

            <div>
              <p className="text-[13px] font-medium text-[#7E88C3]">
                Payment Due
              </p>
              <p className="mt-3 text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]">
                {invoice.paymentDue}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium text-[#7E88C3]">Bill To</p>
            <p className="mt-3 text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]">
              {invoice.clientName}
            </p>

            <div className="mt-2 space-y-1">
              <p className="text-[13px] font-medium text-[#888EB0]">
                {invoice.clientAddress.street}
              </p>
              <p className="text-[13px] font-medium text-[#888EB0]">
                {invoice.clientAddress.city}
              </p>
              <p className="text-[13px] font-medium text-[#888EB0]">
                {invoice.clientAddress.postCode}
              </p>
              <p className="text-[13px] font-medium text-[#888EB0]">
                {invoice.clientAddress.country}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium text-[#7E88C3]">Sent to</p>
            <p className="mt-3 text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16] wrap-break-words">
              {invoice.clientEmail}
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg bg-[#F9FAFE]">
          <div className="hidden grid-cols-[1fr_100px_120px_120px] gap-4 px-8 py-6 md:grid">
            <p className="text-[13px] font-medium text-[#7E88C3]">Item Name</p>
            <p className="text-right text-[13px] font-medium text-[#7E88C3]">
              QTY.
            </p>
            <p className="text-right text-[13px] font-medium text-[#7E88C3]">
              Price
            </p>
            <p className="text-right text-[13px] font-medium text-[#7E88C3]">
              Total
            </p>
          </div>

          <div className="space-y-6 px-6 py-6 md:space-y-0 md:px-8 md:pb-8 md:pt-0">
            {invoice.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between md:grid md:grid-cols-[1fr_100px_120px_120px] md:gap-4"
              >
                <div>
                  <p className="text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[13px] font-bold text-[#7E88C3] md:hidden">
                    {item.quantity} x £ {item.price.toFixed(2)}
                  </p>
                </div>

                <p className="hidden text-right text-[13px] font-bold text-[#7E88C3] md:block">
                  {item.quantity}
                </p>

                <p className="hidden text-right text-[13px] font-bold text-[#7E88C3] md:block">
                  £ {item.price.toFixed(2)}
                </p>

                <p className="text-right text-[15px] font-bold tracking-[-0.25px] text-[#0C0E16]">
                  £ {item.total.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between bg-[#373B53] px-6 py-8 md:px-8">
            <p className="text-[11px] font-medium text-white">Amount Due</p>
            <p className="text-[24px] font-bold tracking-[-0.5px] text-white">
              £ {invoice.total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex items-center justify-end gap-2 rounded-t-lg bg-white px-6 py-6 shadow-[0_-10px_10px_-10px_rgba(72,84,159,0.1004)] md:hidden">
        <button
          type="button"
          className="inline-flex h-12 items-center rounded-full bg-[#F9FAFE] px-6 text-[15px] font-bold text-[#7E88C3]"
        >
          Edit
        </button>

        <button
          type="button"
          className="inline-flex h-12 items-center rounded-full bg-[#EC5757] px-6 text-[15px] font-bold text-white"
        >
          Delete
        </button>

        {invoice.status === "pending" && (
          <button
            type="button"
            className="inline-flex h-12 items-center rounded-full bg-[#7C5DFA] px-6 text-[15px] font-bold text-white"
          >
            Mark as Paid
          </button>
        )}
      </div>
    </section>
  );
}

export default InvoiceDetailPage;
