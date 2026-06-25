import { useState, type ReactNode } from "react";
import Sidebar from "../../../components/Sidebar";
import TaskIcon from "../../../assets/icons/taskIcon";
import NoteIcon from "../../../assets/icons/noteIcon";
import ScreenShotIcon from "../../../assets/icons/screenShotIcon";
import GroupStarIcon from "../../../assets/icons/groupStarIcon";
import FocusAreaForm from "./focusAreaForm";

interface ReportStatsDTO {
  id: number;
  title: string;
  value: string;
  description: string;
  icon?: ReactNode;
}

const SummaryLogs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const REPORT_NOTES = ["Today", "This Week", "This Month"];

  const reportStats: ReportStatsDTO[] = [
    {
      id: 1,
      title: "Total Tasks",
      value: "24",
      description: "+20% vs last week",
      icon: <TaskIcon />,
    },
    {
      id: 2,
      title: "Learning Hours",
      value: "15.7",
      description: "+20% vs last week",
      icon: <NoteIcon />,
    },
    {
      id: 3,
      title: "Focus Score",
      value: "8.7 / 10",
      description: "Excellent",
      icon: <ScreenShotIcon />,
    },
  ];

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

        <section className="flex flex-col gap-4 border-none bg-white p-4 shadow-md md:flex-row md:items-center justify-between md:p-6">
          <div className="flex justify-between items-center gap-2 sm:gap-4">
            <div>
              <h1 className="text-xl font-bold md:text-2xl">AI Summary</h1>
              <span className="text-gray-500">
                AI - Powered Insights from your logs
              </span>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <select className=" rounded border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none cursor-pointer">
                {REPORT_NOTES.map((notes) => (
                  <option key={notes}>{notes}</option>
                ))}
              </select>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-white">
              R
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 sm:px-6 sm:mt-5 lg:max-w-7xl lg:px-8 py-3">
          <div className="border-2 border-gray-300 rounded-lg p-5 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <span>
                <GroupStarIcon />
              </span>
              <h4 className="text-2xl font-bold">Weekly Summary</h4>
            </div>

            <div className="flex flex-wrap justify-between">
              {reportStats.map((stats, index) => (
                <div
                  className="flex justify-between mt-4 bg-gray-100 p-2 rounded-lg shadow-lg"
                  key={index}
                >
                  <div className="flex items-start gap-2 w-2xs py-3">
                    <div className="border border-gray-300 p-2 rounded-full bg-gray-200">
                      {stats.icon}
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-md font-bold">{stats.title}</span>
                      <span className="text-2xl font-bold">{stats.value}</span>
                      <span className="text-xs text-green-600 font-bold">
                        {stats.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 sm:px-6 sm:mt-5 lg:max-w-7xl lg:px-8 py-3">
          <FocusAreaForm />
        </section>
      </main>
    </>
  );
};

export default SummaryLogs;
