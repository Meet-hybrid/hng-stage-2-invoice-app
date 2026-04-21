import type { InvoiceStatus } from "../types/invoice";

interface StatusBadgeProps {
  status: InvoiceStatus;
}

const statusStyles: Record<InvoiceStatus, string> = {
  draft: "bg-[#373B53]/6 text-[#373B53]",
  pending: "bg-[#FF8F00]/6 text-[#FF8F00]",
  paid: "bg-[#33D69F]/6 text-[#33D69F]",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div
      className={`inline-flex h-10 min-w-26 items-center justify-center gap-2 rounded-md px-4 text-[15px] font-bold capitalize tracking-[-0.25px] ${statusStyles[status]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      <span>{status}</span>
    </div>
  );
}

export default StatusBadge;
