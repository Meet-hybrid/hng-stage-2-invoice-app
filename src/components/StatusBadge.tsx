import { useTheme } from "../hooks/useTheme";
import type { InvoiceStatus } from "../types/invoice";

interface StatusBadgeProps {
  status: InvoiceStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const statusStyles: Record<InvoiceStatus, string> = {
    paid: "bg-[rgba(51,214,159,0.06)] text-[#33D69F]",
    pending: "bg-[rgba(255,143,0,0.06)] text-[#FF8F00]",
    draft: isDark
      ? "bg-[rgba(223,227,250,0.06)] text-[#DFE3FA]"
      : "bg-[rgba(55,59,83,0.06)] text-[#373B53]",
  };

  return (
    <div
      className={`inline-flex h-8 min-w-24 items-center justify-center gap-2 rounded-lg px-3 text-[11px] font-bold uppercase tracking-wide ${statusStyles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      <span>{status}</span>
    </div>
  );
}

export default StatusBadge;
