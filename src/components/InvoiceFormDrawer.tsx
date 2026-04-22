import { useTheme } from "../hooks/useTheme";

interface InvoiceFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function InvoiceFormDrawer({ isOpen, onClose }: InvoiceFormDrawerProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`absolute left-0 top-0 h-full w-full overflow-y-auto px-6 py-8 transition md:max-w-155 md:px-14 ${
          isDark ? "bg-[#141625]" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl font-bold tracking-[-0.5px] ${
            isDark ? "text-white" : "text-[#0C0E16]"
          }`}
        >
          New Invoice
        </h2>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill From</h3>
            <p
              className={`mt-3 text-sm ${
                isDark ? "text-[#DFE3FA]" : "text-[#888EB0]"
              }`}
            >
              Form fields will go here next.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill To</h3>
            <p
              className={`mt-3 text-sm ${
                isDark ? "text-[#DFE3FA]" : "text-[#888EB0]"
              }`}
            >
              Client details and item list will go here next.
            </p>
          </div>
        </div>

        <div
          className={`sticky bottom-0 mt-12 flex items-center justify-between border-t pt-6 ${
            isDark ? "border-[#252945]" : "border-[#DFE3FA]"
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className={`rounded-full px-6 py-4 text-[15px] font-bold transition ${
              isDark
                ? "bg-[#252945] text-[#DFE3FA] hover:bg-white hover:text-[#7E88C3]"
                : "bg-[#F9FAFE] text-[#7E88C3] hover:bg-[#DFE3FA]"
            }`}
          >
            Discard
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full bg-[#373B53] px-6 py-4 text-[15px] font-bold text-[#888EB0] transition hover:bg-[#0C0E16]"
            >
              Save as Draft
            </button>

            <button
              type="button"
              className="rounded-full bg-[#7C5DFA] px-6 py-4 text-[15px] font-bold text-white transition hover:bg-[#9277FF]"
            >
              Save & Send
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default InvoiceFormDrawer;
