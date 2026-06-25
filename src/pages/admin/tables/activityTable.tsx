import type { ReactNode } from "react";
import TaskIcon from "../../../assets/icons/taskIcon";

interface RecentTasksDTO {
  icon?: ReactNode;
  title?: string;
  time?: string;
}

const RecentActivity = () => {
  const recentTasks: RecentTasksDTO[] = [
    {
      icon: <TaskIcon />,
      title: "Logged - Build Authentication Flow",
      time: "10:30 AM",
    },
    {
      icon: <TaskIcon />,
      title: "Completed Lesson - React hooks deep Dive",
      time: "09:15 AM",
    },
    {
      icon: <TaskIcon />,
      title: "Asked AI about _ useEffect Cleanup",
      time: "08:45 AM",
    },
    {
      icon: <TaskIcon />,
      title: "Logged - UI Improvements on Dashboard",
      time: "Yesterday",
    },
    {
      icon: <TaskIcon />,
      title: "Completed Lesson - Advanced TypeScript Types",
      time: "Yesterday",
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-5 md:py-3 lg:py-2 py-5 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold">Recent Activity</h4>
          </div>
          <div>
            <button className="border-none px-2 py-1 rounded-sm bg-[#0A0A0A] text-[#f3c11c] shadow-lg font-semibold cursor-pointer hover:bg-[#3b3939b9]">
              View All
            </button>
          </div>
        </div>

        <div className="mt-5 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {recentTasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{task.icon}</span>
                <span className="font-medium text-gray-800">{task.title}</span>
              </div>

              <span className="text-sm font-semibold text-gray-400">
                {task.time}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecentActivity;
