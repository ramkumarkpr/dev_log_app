import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Cards from "../../../components/Cards";
import RecentActivity from "../tables/activityTable";
import Logo from "../../../assets/icons/logo";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const appusers = [
    {
      id: 1,
      name: "Ram",
    },
    {
      id: 1,
      name: "Danearys",
    },
  ];

  const currentUser = appusers.find((user) => user.name.startsWith("R"));

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <main className="min-h-screen md:ml-72 bg-gray-50 overflow-y-auto">
        {/* Mobile Header */}
        <header className="flex items-center p-4 shadow md:hidden bg-[#0A0A0A]">
          <button onClick={() => setIsOpen(true)} className="text-2xl">
            <Logo />
          </button>

          <h1 className="ml-4 text-2xl uppercase font-extrabold bg-linear-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
            DevLog AI
          </h1>
        </header>

        <section className="flex flex-col gap-4 border-none bg-white p-4 shadow-md md:flex-row md:items-center md:justify-between md:p-6">
          <div>
            <h1 className="text-xl font-bold md:text-2xl">Dashboard</h1>
            <span className="text-gray-500">
              Let's track your progress and build something amazing
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
            />

            <button className="shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {/* icon */}
              </svg>
            </button>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-white">
              R
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:mt-5 lg:max-w-7xl lg:px-8 py-3">
          <h1 className="text-2xl font-extrabold text-[#D4AF37]">
            {`Welcome Back ${currentUser?.name}`}
          </h1>
        </div>
        <Cards />
        <RecentActivity />
      </main>
    </>
  );
};

export default Dashboard;
