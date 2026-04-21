function MobileNavbar() {
  return (
    <header className="flex items-center justify-between bg-[#373B53] px-6 py-4 lg:hidden">
      <div className="flex h-12 w-12 items-center justify-center rounded-r-2xl bg-violet-600">
        <div className="h-6 w-6 rounded-full bg-white/20" />
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm text-white transition hover:text-violet-300">
          Theme
        </button>

        <div className="h-10 w-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}

export default MobileNavbar;
