import { Link } from "react-router-dom";
import type { Invoice } from "../types/invoice";

interface InvoiceCardProps {
  invoice: Invoice;
}

function InvoiceCard({ invoice }: InvoiceCardProps) {
  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className="block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-violet-400 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">#{invoice.id}</h2>

        <p className="text-sm capitalize text-violet-600">{invoice.status}</p>
      </div>

      <p className="mt-4 text-sm text-gray-500">Due {invoice.paymentDue}</p>

      <p className="mt-2 text-sm text-gray-700">{invoice.clientName}</p>

      <p className="mt-4 text-xl font-bold text-gray-900">£ {invoice.total}</p>
    </Link>
  );
}

export default InvoiceCard;
