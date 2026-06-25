import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

const SummaryLogs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const REPORT_NOTES = ["Today", "This Week", "This Month"];

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="min-h-screen md:ml-72 bg-gray-50 overflow-y-auto">
        {/* Mobile Header */}
        <header className="flex items-center p-4 shadow md:hidden bg-[#0A0A0A]">
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl bg-gray-200 px-2 rounded-sm"
          >
            ☰
          </button>

          <h1 className="ml-4 text-2xl uppercase font-extrabold bg-linear-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
            DevLog AI
          </h1>
        </header>

        <section className="flex flex-col gap-4 border-none bg-white p-4 shadow-md md:flex-row md:items-center md:justify-end md:p-6">
          <div className="md:flex w-1/2 items-center gap-2 sm:gap-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
            />

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-white">
              R
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 sm:px-6 sm:mt-5 lg:max-w-7xl lg:px-8 py-3">
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            <div>
              <h1 className="text-xl font-bold md:text-2xl">AI Summary</h1>
              <span className="text-gray-500">
                AI - Powered Insights from your logs
              </span>
            </div>
            <div>
              <select className=" rounded border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none appearance-none cursor-pointer">
                {REPORT_NOTES.map((notes) => (
                  <option key={notes}>{notes}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SummaryLogs;
