import invoices from "../data/data.json";

function InvoiceListPage() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold">Invoices</h1>

      <div className="mt-6 space-y-4">
        {invoices.map((invoice) => (
          <article
            key={invoice.id}
            className="rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{invoice.id}</h2>

            <p className="mt-2 text-sm text-gray-600">
              Client: {invoice.clientName}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Total: £{invoice.total}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              Status: {invoice.status}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InvoiceListPage;
