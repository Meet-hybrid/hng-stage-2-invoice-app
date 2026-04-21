function Sidebar() {
  return (
    <aside className="hidden w-28 flex-col justify-between rounded-r-3xl bg-[#373B53] lg:flex">
      <div className="flex h-28 items-center justify-center rounded-r-3xl bg-violet-600">
        <div className="h-10 w-10 rounded-full bg-white/20" />
      </div>

      <div className="flex flex-col items-center gap-6 border-t border-[#494E6E] py-6">
        <button className="text-sm text-white transition hover:text-violet-300">
          Theme
        </button>

        <div className="h-10 w-10 rounded-full bg-gray-300" />
      </div>
    </aside>
  );
}

export default Sidebar;
