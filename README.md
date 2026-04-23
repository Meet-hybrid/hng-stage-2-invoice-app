<!-- # Invoice Management App

A responsive Invoice Management Application built with React, TypeScript, Tailwind CSS, and Vite. Users can create, view, edit, and delete invoices with support for status management, filtering, dark mode, and fully responsive layouts.

---


## Features

- Create, view, edit, and delete invoices
- Save invoices as drafts
- Mark pending invoices as paid
- Filter invoices by status (Draft, Pending, Paid)
- Toggle between light and dark mode
- Persist invoice and theme data using LocalStorage
- Fully responsive layout across mobile, tablet, and desktop
- Hover states on buttons, filters, invoice cards, and form inputs

---

## Invoice Status Flow

Invoices can hold one of three statuses: **Draft**, **Pending**, or **Paid**.

- Draft invoices can be edited at any time
- Pending invoices can be marked as paid
- Paid invoices are final and cannot revert to draft
- Status changes are reflected on both the list and detail views

---

## Form Validation

The invoice form validates the following before submission:

- All required fields are filled
- Client email is in a valid format
- At least one invoice item exists
- Item quantity is greater than 0
- Item price is greater than 0

Invalid fields display visual feedback and block submission until resolved.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React Icons
- LocalStorage

---

## Project Structure

hng-stage-2-invoice-app
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── InvoiceCard.tsx
│   │   ├── InvoiceFormDrawer.tsx
│   │   ├── MobileNavbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatusBadge.tsx
│   ├── context/
│   │   ├── InvoiceContext.tsx
│   │   ├── theme-context.ts
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── data.json
│   ├── hooks/
│   │   ├── useFocusTrap.ts
│   │   ├── useInvoices.ts
│   │   └── useTheme.ts
│   ├── layout/
│   │   └── AppLayout.tsx
│   ├── pages/
│   │   ├── InvoiceDetailPage.tsx
│   │   └── InvoiceListPage.tsx
│   ├── routes/
│   │   └── router.tsx
│   ├── types/
│   │   └── invoice.ts
│   └── utils/
│       └── formatCurrency.ts
├── App.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md

---

## Setup

1. Clone the repository and navigate into the project folder:

```bash
git clone <your-repo-url>
cd hng-stage-2-invoice-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

---

## Accessibility

- Semantic HTML throughout
- Proper labels on all form inputs
- Keyboard-accessible buttons and controls
- ESC key closes modals and dropdowns
- Focus trapping inside open modals
- Click-outside support to dismiss overlays
- Strong contrast ratios in both light and dark themes

---

## Responsive Design

The layout adapts across three breakpoints:

- **Mobile** — 320px and up
- **Tablet** — 768px and up
- **Desktop** — 1024px and up

Forms, filters, and invoice cards all reflow based on the available screen width.

---

## Design Decisions

- **LocalStorage over a backend** — Keeps the stack simple and avoids the need for a server or database during development.
- **Conditional rendering for layouts** — Some mobile and desktop views needed separate rendering logic for proper visual alignment.
- **Local ID generation** — Invoice IDs are generated on the client since there is no backend to issue them.

---

## Additional Improvements

- Seed data is included so the app feels populated on first load, rather than starting empty.
- Reusable hooks and utility functions are extracted to keep components lean and easy to follow.
- Modal logic (delete confirmation, form drawer) is shared across the app rather than duplicated.
- The filter dropdown closes automatically when clicking outside or pressing ESC.

---

## Deployment

The project is deployed on Vercel. Pushing to the main branch triggers an automatic redeployment — no manual steps required.

---

## Author

Michael Philip -->