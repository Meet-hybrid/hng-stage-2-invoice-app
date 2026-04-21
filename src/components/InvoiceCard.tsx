import { Link } from "react-router-dom";
import type { Invoice } from "../types/invoice";
import StatusBadge from "./StatusBadge";

interface InvoiceCardProps {
  invoice: Invoice;
}

function InvoiceCard({ invoice }: InvoiceCardProps) {
  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className="block rounded-lg border border-transparent bg-white px-6 py-6 shadow-sm transition hover:border-violet-500"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between md:w-35 md:block">
          <h2 className="text-sm font-bold tracking-tight text-slate-900">
            <span className="text-slate-400">#</span>
            {invoice.id}
          </h2>

          <p className="text-sm text-slate-500 md:mt-6">{invoice.clientName}</p>
        </div>

        <div className="flex items-center justify-between md:w-45 md:block">
          <p className="text-sm text-slate-500">Due {invoice.paymentDue}</p>

          <p className="text-xl font-bold tracking-tight text-slate-900 md:mt-2">
            £ {invoice.total}
          </p>
        </div>

        <div className="flex items-center justify-between md:w-42.5 md:justify-end md:gap-5">
          <StatusBadge status={invoice.status} />

          <span className="hidden text-violet-600 md:inline">&gt;</span>
        </div>
      </div>
    </Link>
  );
}

export default InvoiceCard;
