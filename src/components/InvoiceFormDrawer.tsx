import { useTheme } from "../hooks/useTheme";
import { useMemo, useState } from "react";

interface InvoiceFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function InvoiceFormDrawer({ isOpen, onClose }: InvoiceFormDrawerProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    senderStreet: "",
    senderCity: "",
    senderPostCode: "",
    senderCountry: "",
    clientName: "",
    clientEmail: "",
    clientStreet: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    invoiceDate: "",
    paymentTerms: "Net 30 Days",
    projectDescription: "",
  });

  const [itemData, setItemData] = useState({
    name: "",
    quantity: 1,
    price: 0,
  });

  const itemTotal = useMemo(() => {
    return itemData.quantity * itemData.price;
  }, [itemData.quantity, itemData.price]);

  if (!isOpen) return null;

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleItemChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setItemData((currentItem) => ({
      ...currentItem,
      [name]: name === "quantity" || name === "price" ? Number(value) : value,
    }));
  }

  function handleDiscard() {
    setFormData({
      senderStreet: "",
      senderCity: "",
      senderPostCode: "",
      senderCountry: "",
      clientName: "",
      clientEmail: "",
      clientStreet: "",
      clientCity: "",
      clientPostCode: "",
      clientCountry: "",
      invoiceDate: "",
      paymentTerms: "Net 30 Days",
      projectDescription: "",
    });

    setItemData({
      name: "",
      quantity: 1,
      price: 0,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`absolute left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden px-6 py-8 transition md:max-w-155 md:px-14 ${
          isDark ? "bg-[#141625]" : "bg-white"
        } custom-scrollbar`}
      >
        <h2
          className={`text-2xl font-bold tracking-[-0.5px] ${
            isDark ? "text-white" : "text-[#0C0E16]"
          }`}
        >
          New Invoice
        </h2>

        <div className="mt-10 space-y-10">
          <div className="space-y-6">
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill From</h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="senderStreet"
                  className={`mb-2 block text-[13px] font-medium ${
                    isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                  }`}
                >
                  Street Address
                </label>
                <input
                  id="senderStreet"
                  name="senderStreet"
                  type="text"
                  value={formData.senderStreet}
                  onChange={handleInputChange}
                  className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="senderCity"
                    className={`mb-2 block text-[13px] font-medium ${
                      isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                    }`}
                  >
                    City
                  </label>
                  <input
                    id="senderCity"
                    name="senderCity"
                    type="text"
                    value={formData.senderCity}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                      isDark
                        ? "border-[#252945] bg-[#1E2139] text-white"
                        : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="senderPostCode"
                    className={`mb-2 block text-[13px] font-medium ${
                      isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                    }`}
                  >
                    Post Code
                  </label>
                  <input
                    id="senderPostCode"
                    name="senderPostCode"
                    type="text"
                    value={formData.senderPostCode}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                      isDark
                        ? "border-[#252945] bg-[#1E2139] text-white"
                        : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="senderCountry"
                    className={`mb-2 block text-[13px] font-medium ${
                      isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                    }`}
                  >
                    Country
                  </label>
                  <input
                    id="senderCountry"
                    name="senderCountry"
                    type="text"
                    value={formData.senderCountry}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                      isDark
                        ? "border-[#252945] bg-[#1E2139] text-white"
                        : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill To</h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="clientName"
                  className={`mb-2 block text-[13px] font-medium ${
                    isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                  }`}
                >
                  Client's Name
                </label>
                <input
                  id="clientName"
                  name="clientName"
                  type="text"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="clientEmail"
                  className={`mb-2 block text-[13px] font-medium ${
                    isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                  }`}
                >
                  Client's Email
                </label>
                <input
                  id="clientEmail"
                  name="clientEmail"
                  type="email"
                  value={formData.clientEmail}
                  onChange={handleInputChange}
                  className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="clientStreet"
                  className={`mb-2 block text-[13px] font-medium ${
                    isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                  }`}
                >
                  Street Address
                </label>
                <input
                  id="clientStreet"
                  name="clientStreet"
                  type="text"
                  value={formData.clientStreet}
                  onChange={handleInputChange}
                  className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label
                    htmlFor="clientCity"
                    className={`mb-2 block text-[13px] font-medium ${
                      isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                    }`}
                  >
                    City
                  </label>
                  <input
                    id="clientCity"
                    name="clientCity"
                    type="text"
                    value={formData.clientCity}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                      isDark
                        ? "border-[#252945] bg-[#1E2139] text-white"
                        : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="clientPostCode"
                    className={`mb-2 block text-[13px] font-medium ${
                      isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                    }`}
                  >
                    Post Code
                  </label>
                  <input
                    id="clientPostCode"
                    name="clientPostCode"
                    type="text"
                    value={formData.clientPostCode}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                      isDark
                        ? "border-[#252945] bg-[#1E2139] text-white"
                        : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="clientCountry"
                    className={`mb-2 block text-[13px] font-medium ${
                      isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                    }`}
                  >
                    Country
                  </label>
                  <input
                    id="clientCountry"
                    name="clientCountry"
                    type="text"
                    value={formData.clientCountry}
                    onChange={handleInputChange}
                    className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                      isDark
                        ? "border-[#252945] bg-[#1E2139] text-white"
                        : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="invoiceDate"
                  className={`mb-2 block text-[13px] font-medium ${
                    isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                  }`}
                >
                  Invoice Date
                </label>
                <input
                  id="invoiceDate"
                  name="invoiceDate"
                  type="date"
                  value={formData.invoiceDate}
                  onChange={handleInputChange}
                  className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="paymentTerms"
                  className={`mb-2 block text-[13px] font-medium ${
                    isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                  }`}
                >
                  Payment Terms
                </label>
                <select
                  id="paymentTerms"
                  name="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleInputChange}
                  className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                  }`}
                >
                  <option>Net 1 Day</option>
                  <option>Net 7 Days</option>
                  <option>Net 14 Days</option>
                  <option>Net 30 Days</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="projectDescription"
                className={`mb-2 block text-[13px] font-medium ${
                  isDark ? "text-[#DFE3FA]" : "text-[#7E88C3]"
                }`}
              >
                Project Description
              </label>
              <input
                id="projectDescription"
                name="projectDescription"
                type="text"
                value={formData.projectDescription}
                onChange={handleInputChange}
                className={`h-12 w-full rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                  isDark
                    ? "border-[#252945] bg-[#1E2139] text-white"
                    : "border-[#DFE3FA] bg-white text-[#0C0E16]"
                }`}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#777F98]">Item List</h3>

            <div className="hidden grid-cols-[1.8fr_0.7fr_1fr_1fr] gap-4 md:grid">
              <p className="text-[13px] font-medium text-[#7E88C3]">
                Item Name
              </p>
              <p className="text-[13px] font-medium text-[#7E88C3]">Qty.</p>
              <p className="text-[13px] font-medium text-[#7E88C3]">Price</p>
              <p className="text-[13px] font-medium text-[#7E88C3]">Total</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.8fr_0.7fr_1fr_1fr]">
                <input
                  name="name"
                  type="text"
                  placeholder="Item Name"
                  value={itemData.name}
                  onChange={handleItemChange}
                  className={`h-12 rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white placeholder:text-[#888EB0]"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16] placeholder:text-[#888EB0]"
                  }`}
                />

                <input
                  name="quantity"
                  type="number"
                  placeholder="1"
                  value={itemData.quantity}
                  onChange={handleItemChange}
                  className={`h-12 rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white placeholder:text-[#888EB0]"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16] placeholder:text-[#888EB0]"
                  }`}
                />

                <input
                  name="price"
                  type="number"
                  placeholder="0.00"
                  value={itemData.price}
                  onChange={handleItemChange}
                  className={`h-12 rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-white placeholder:text-[#888EB0]"
                      : "border-[#DFE3FA] bg-white text-[#0C0E16] placeholder:text-[#888EB0]"
                  }`}
                />

                <input
                  type="text"
                  value={itemTotal.toFixed(2)}
                  readOnly
                  className={`h-12 rounded-md border px-5 text-[15px] font-bold outline-none transition ${
                    isDark
                      ? "border-[#252945] bg-[#1E2139] text-[#888EB0]"
                      : "border-[#DFE3FA] bg-white text-[#888EB0]"
                  }`}
                />
              </div>
            </div>

            <button
              type="button"
              className={`w-full rounded-full px-6 py-4 text-[15px] font-bold transition ${
                isDark
                  ? "bg-[#252945] text-[#DFE3FA] hover:bg-white hover:text-[#7E88C3]"
                  : "bg-[#F9FAFE] text-[#7E88C3] hover:bg-[#DFE3FA]"
              }`}
            >
              + Add New Item
            </button>
          </div>
        </div>

        <div
          className={`sticky bottom-0 mt-12 flex items-center justify-between border-t pt-6 ${
            isDark ? "border-[#252945]" : "border-[#DFE3FA]"
          }`}
        >
          <button
            type="button"
            onClick={handleDiscard}
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
