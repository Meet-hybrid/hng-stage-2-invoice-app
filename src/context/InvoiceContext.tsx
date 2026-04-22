import { createContext, useMemo, useState, type ReactNode } from "react";
import rawInvoices from "../data/data.json";
import type { Invoice } from "../types/invoice";

type CreateInvoiceInput = Omit<Invoice, "id">;

type InvoiceContextType = {
  invoices: Invoice[];
  createInvoice: (invoice: CreateInvoiceInput) => void;
  deleteInvoice: (id: string) => void;
};

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

const STORAGE_KEY = "invoice-app-invoices";

function getInitialInvoices(): Invoice[] {
  const savedInvoices = localStorage.getItem(STORAGE_KEY);

  if (savedInvoices) {
    return JSON.parse(savedInvoices) as Invoice[];
  }

  return rawInvoices as Invoice[];
}

type InvoiceProviderProps = {
  children: ReactNode;
};

export function InvoiceProvider({ children }: InvoiceProviderProps) {
  const [invoices, setInvoices] = useState<Invoice[]>(getInitialInvoices);

  function createInvoice(invoice: CreateInvoiceInput) {
    const newInvoice: Invoice = {
      ...invoice,
      id: `RT${Math.floor(1000 + Math.random() * 9000)}`,
    };

    setInvoices((currentInvoices) => {
      const updatedInvoices = [newInvoice, ...currentInvoices];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedInvoices));
      return updatedInvoices;
    });
  }

  function deleteInvoice(id: string) {
    setInvoices((currentInvoices) => {
      const updatedInvoices = currentInvoices.filter(
        (invoice) => invoice.id !== id,
      );

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedInvoices));
      return updatedInvoices;
    });
  }

  const value = useMemo(
    () => ({
      invoices,
      createInvoice,
      deleteInvoice,
    }),
    [invoices],
  );

  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
}

export { InvoiceContext };
