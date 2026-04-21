import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import rawInvoices from "../data/data.json";
import StatusBadge from "../components/StatusBadge";
import { useTheme } from "../hooks/useTheme";
import type { Invoice } from "../types/invoice";

const invoices = rawInvoices as Invoice[];

function InvoiceDetailPage() {
  const { id } = useParams();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const invoice = invoices.find((item) => item.id === id);

  if (!invoice) {
    return (
      <section className="mx-auto w-full max-w-182.5 pb-24 md:pb-0">
        <Link
          to="/"
          className={`inline-flex items-center gap-4 text-[15px] font-bold ${
            isDark ? "text-white" : "text-[#0C0E16]"
          }`}
        >
          <ChevronLeft size={18} className="text-[#7C5DFA]" strokeWidth={3} />
          Go back
        </Link>

        <div
          className={`mt-8 rounded-lg p-8 text-center ${
            isDark ? "bg-[#1E2139] text-white" : "bg-white text-[#0C0E16]"
          }`}
        >
          Invoice not found.
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-182.5">
      <Link
        to="/"
        className={`inline-flex items-center gap-4 text-[15px] font-bold ${
          isDark ? "text-white" : "text-[#0C0E16]"
        }`}
      >
        <ChevronLeft size={18} className="text-[#7C5DFA]" strokeWidth={3} />
        Go back
      </Link>

      <div
        className={`mt-8 flex flex-col gap-6 rounded-lg px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 ${
          isDark ? "bg-[#1E2139]" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-4">
          <span
            className={`text-[13px] font-medium ${
              isDark ? "text-[#DFE3FA]" : "text-[#858BB2]"
            }`}
          >
            Status
          </span>
          <StatusBadge status={invoice.status} />
        </div>

        <div className="hidden md:flex md:flex-wrap md:gap-3">
          <button
            type="button"
            className={`rounded-full px-6 py-4 text-[15px] font-bold transition ${
              isDark
                ? "bg-[#252945] text-[#DFE3FA] hover:bg-white hover:text-[#7E88C3]"
                : "bg-[#F9FAFE] text-[#7E88C3] hover:bg-[#DFE3FA]"
            }`}
          >
            Edit
          </button>

          <button
            type="button"
            className="rounded-full bg-[#EC5757] px-6 py-4 text-[15px] font-bold text-white transition hover:bg-[#FF9797]"
          >
            Delete
          </button>

          <button
            type="button"
            className="rounded-full bg-[#7C5DFA] px-6 py-4 text-[15px] font-bold text-white transition hover:bg-[#9277FF]"
          >
            Mark as Paid
          </button>
        </div>
      </div>

      <div
        className={`mt-6 rounded-lg px-6 py-8 md:px-8 md:py-10 ${
          isDark ? "bg-[#1E2139]" : "bg-white"
        }`}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h1
              className={`text-[15px] font-bold ${
                isDark ? "text-white" : "text-[#0C0E16]"
              }`}
            >
              <span className="text-[#7E88C3]">#</span>
              {invoice.id}
            </h1>

            <p
              className={`mt-2 text-[13px] font-medium ${
                isDark ? "text-[#DFE3FA]" : "text-[#888EB0]"
              }`}
            >
              {invoice.description}
            </p>
          </div>

          <div
            className={`text-[13px] font-medium md:text-right ${
              isDark ? "text-[#DFE3FA]" : "text-[#888EB0]"
            }`}
          >
            <p>{invoice.senderAddress.street}</p>
            <p className="mt-1">{invoice.senderAddress.city}</p>
            <p className="mt-1">{invoice.senderAddress.postCode}</p>
            <p className="mt-1">{invoice.senderAddress.country}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="space-y-8">
            <div>
              <p className="text-[13px] font-medium text-[#7E88C3]">
                Invoice Date
              </p>
              <p
                className={`mt-3 text-2xl font-bold tracking-[-0.5px] ${
                  isDark ? "text-white" : "text-[#0C0E16]"
                }`}
              >
                {invoice.createdAt}
              </p>
            </div>

            <div>
              <p className="text-[13px] font-medium text-[#7E88C3]">
                Payment Due
              </p>
              <p
                className={`mt-3 text-2xl font-bold tracking-[-0.5px] ${
                  isDark ? "text-white" : "text-[#0C0E16]"
                }`}
              >
                {invoice.paymentDue}
              </p>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium text-[#7E88C3]">Bill To</p>
            <p
              className={`mt-3 text-[15px] font-bold ${
                isDark ? "text-white" : "text-[#0C0E16]"
              }`}
            >
              {invoice.clientName}
            </p>

            <div
              className={`mt-2 text-[13px] font-medium ${
                isDark ? "text-[#DFE3FA]" : "text-[#888EB0]"
              }`}
            >
              <p>{invoice.clientAddress.street}</p>
              <p className="mt-1">{invoice.clientAddress.city}</p>
              <p className="mt-1">{invoice.clientAddress.postCode}</p>
              <p className="mt-1">{invoice.clientAddress.country}</p>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-medium text-[#7E88C3]">Sent to</p>
            <p
              className={`mt-3 text-[15px] font-bold wrap-break-words ${
                isDark ? "text-white" : "text-[#0C0E16]"
              }`}
            >
              {invoice.clientEmail}
            </p>
          </div>
        </div>

        <div
          className={`mt-10 overflow-hidden rounded-lg ${
            isDark ? "bg-[#252945]" : "bg-[#F9FAFE]"
          }`}
        >
          <div className="hidden grid-cols-[1fr_80px_120px_120px] gap-4 px-8 py-8 md:grid">
            <p className="text-[13px] font-medium text-[#7E88C3]">Item Name</p>
            <p className="text-center text-[13px] font-medium text-[#7E88C3]">
              QTY.
            </p>
            <p className="text-right text-[13px] font-medium text-[#7E88C3]">
              Price
            </p>
            <p className="text-right text-[13px] font-medium text-[#7E88C3]">
              Total
            </p>
          </div>

          <div className="space-y-6 px-8 pb-8 md:space-y-0 md:px-8 md:pb-0">
            {invoice.items.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="md:grid md:grid-cols-[1fr_80px_120px_120px] md:gap-4 md:py-4"
              >
                <div>
                  <p
                    className={`text-[15px] font-bold ${
                      isDark ? "text-white" : "text-[#0C0E16]"
                    }`}
                  >
                    {item.name}
                  </p>

                  <p className="mt-2 text-[13px] font-bold text-[#7E88C3] md:hidden">
                    {item.quantity} x £ {item.price.toFixed(2)}
                  </p>
                </div>

                <p className="hidden text-center text-[15px] font-bold text-[#7E88C3] md:block">
                  {item.quantity}
                </p>

                <p className="hidden text-right text-[15px] font-bold text-[#7E88C3] md:block">
                  £ {item.price.toFixed(2)}
                </p>

                <p
                  className={`mt-2 text-right text-[15px] font-bold md:mt-0 ${
                    isDark ? "text-white" : "text-[#0C0E16]"
                  }`}
                >
                  £ {item.total.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`mt-8 flex items-center justify-between px-8 py-8 ${
              isDark ? "bg-[#0C0E16]" : "bg-[#373B53]"
            }`}
          >
            <p className="text-[13px] font-medium text-white">Amount Due</p>
            <p className="text-2xl font-bold tracking-[-0.5px] text-white md:text-[32px]">
              £ {invoice.total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`mt-14 flex items-center justify-center gap-2 rounded-t-lg px-6 py-6 md:hidden ${
          isDark ? "bg-[#1E2139]" : "bg-white"
        }`}
      >
        <button
          type="button"
          className={`rounded-full px-6 py-4 text-[15px] font-bold transition ${
            isDark
              ? "bg-[#252945] text-[#DFE3FA] hover:bg-white hover:text-[#7E88C3]"
              : "bg-[#F9FAFE] text-[#7E88C3] hover:bg-[#DFE3FA]"
          }`}
        >
          Edit
        </button>

        <button
          type="button"
          className="rounded-full bg-[#EC5757] px-6 py-4 text-[15px] font-bold text-white transition hover:bg-[#FF9797]"
        >
          Delete
        </button>

        <button
          type="button"
          className="rounded-full bg-[#7C5DFA] px-6 py-4 text-[15px] font-bold text-white transition hover:bg-[#9277FF]"
        >
          Mark as Paid
        </button>
      </div>
    </section>
  );
}

export default InvoiceDetailPage;
