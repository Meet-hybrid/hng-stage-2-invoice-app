import type { InvoiceStatus } from "../types/invoice";

interface StatusBadgeProps {
  status: InvoiceStatus;
}

const statusStyles: Record<InvoiceStatus, string> = {
  draft: "bg-slate-900/6 text-slate-700",
  pending: "bg-orange-500/10 text-orange-500",
  paid: "bg-green-500/10 text-green-600",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div
      className={`inline-flex min-w-26 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold capitalize ${statusStyles[status]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      <span>{status}</span>
    </div>
  );
}

export default StatusBadge;
