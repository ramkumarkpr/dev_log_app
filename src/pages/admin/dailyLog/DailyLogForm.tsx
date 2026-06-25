import { useEffect, useState, type ReactNode } from "react";
import TaskIcon from "../../../assets/icons/taskIcon";
import NoteIcon from "../../../assets/icons/noteIcon";
import LinkIcon from "../../../assets/icons/linkIcon";
import EditIcon from "../../../assets/icons/editIcon";
import DeleteIcon from "../../../assets/icons/deleteIcon";

interface LogActionsDTO {
  id: number;
  icon?: ReactNode;
  action: string;
  label: string;
}

interface CurrentLogsDTO {
  id: number;
  title: string;
  note: string;
  description: string;
  editIcon: ReactNode;
  deleteIcon: ReactNode;
  time: string;
}

const logActions: LogActionsDTO[] = [
  { id: 1, icon: <TaskIcon />, action: "task", label: "Task" },
  { id: 2, icon: <NoteIcon />, action: "note", label: "Note" },
  { id: 3, icon: <LinkIcon />, action: "link", label: "Link" },
];

const currentLogs: CurrentLogsDTO[] = [
  {
    id: 1,
    title: "Build Authentication Flow",
    note: "Development",
    description:
      "implemented login and register and forgot password API using Node js and mongo DB",
    editIcon: <EditIcon />,
    deleteIcon: <DeleteIcon />,
    time: "10:30 AM",
  },
  {
    id: 2,
    title: "Fix Dashboard Analytics Bug",
    note: "Bug Fix",
    description: "Resolved Chart Rendering issue on mobile devices",
    editIcon: <EditIcon />,
    deleteIcon: <DeleteIcon />,
    time: "10:30 AM",
  },
  {
    id: 3,
    title: "Build Authentication Flow",
    note: "Design",
    description: "Updated dashboard cards and activity feed UI",
    editIcon: <EditIcon />,
    deleteIcon: <DeleteIcon />,
    time: "10:30 AM",
  },
];

const stats = [
  { label: "Total Logs", value: currentLogs.length, color: "text-gray-500" },
  {
    label: "Development",
    value: currentLogs.filter((l) => l.note === "Development").length,
    color: "text-green-600",
  },
  {
    label: "Bug Fix",
    value: currentLogs.filter((l) => l.note === "Bug Fix").length,
    color: "text-red-500",
  },
  {
    label: "Design",
    value: currentLogs.filter((l) => l.note === "Design").length,
    color: "text-purple-700",
  },
];

const getNoteColor = (note: string) => {
  switch (note) {
    case "Development":
      return "text-green-600";
    case "Design":
      return "text-purple-700";
    case "Bug Fix":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

// ==== New Log ====

interface AddNewLogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (log: Omit<CurrentLogsDTO, "id" | "time">) => void;
}

const AddNewForm = ({ isOpen, onClose }: AddNewLogProps) => {
  const [activeActions, setActiveActions] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const CategoryItems = ["Development", "Bug Fix", "Design", "Learning"];

  const toggleAction = (action: string) =>
    setActiveActions((prev) =>
      prev.includes(action)
        ? prev.filter((a) => a !== action)
        : [...prev, action],
    );

  return (
    <>
      {/* /* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Panel */}
        <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div>
              <h2
                id="modal-title"
                className="text-base font-bold text-gray-900"
              >
                New Log Entry
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <button
              className="grid h-8 w-8 place-items-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
              aria-label="Close"
              onClick={() => onClose()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4l8 8"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5 flex flex-col gap-4">
            {/* Title + Category row */}
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Build Authentication Flow"
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition"
                />
              </div>

              <div className="flex flex-col gap-1 min-w-32.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Category
                </label>
                <select className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition appearance-none cursor-pointer">
                  {CategoryItems.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                What did you work on?
              </label>
              <textarea
                rows={4}
                placeholder="Describe your tasks, wins, blockers, ideas…"
                className="resize-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition"
              />
            </div>

            {/* Attachments */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Attach
              </p>
              <div className="flex flex-wrap gap-2">
                {logActions.map((item) => {
                  const active = activeActions.includes(item.action);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleAction(item.action)}
                      className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition
                      ${
                        active
                          ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#B8960A]"
                          : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      <span className="opacity-80">{item.icon}</span>
                      {item.label}
                      {active && (
                        <span className="ml-0.5 text-[#D4AF37]">✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-6 py-4 bg-gray-50/60">
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-100 transition"
              onClick={() => onClose()}
            >
              Cancel
            </button>
            <button className="rounded-lg bg-[#D4AF37] px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#C4A030] transition disabled:opacity-40 disabled:cursor-not-allowed">
              Save Log
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const DailyLogForm = () => {
  const [newFormOpen, setNewFormOpen] = useState(false);
  return (
    <>
      <AddNewForm isOpen={newFormOpen} onClose={() => setNewFormOpen(false)} />
      <section className="sm:p-2 p-2 rounded-lg border border-gray-400 shadow-lg mt-5">
        <div className="flex flex-col gap-5 sm:p-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-md font-extrabold">
                What did you work on today?
              </p>
              <span className="text-gray-500">
                Keep a record of your progress
              </span>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setNewFormOpen(true)}
                className="flex items-center gap-2 px-3 py-2 bg-[#D4AF37] text-white font-semibold rounded-lg hover:bg-[#C4A030] transition cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Add Log
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center px-4 py-8 border-none shadow-md rounded-lg bg-gray-50 "
              >
                <span className={`text-sm font-bold ${item.color}`}>
                  {item.label}
                </span>
                <span className="text-xl font-extrabold text-gray-900 mt-1">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* <div className="flex gap-5">
            {logActions.map((items) => (
              <div
                key={items.id}
                className="flex items-center gap-1 border px-2 py-1 rounded-md bg-[#0A0A0A] text-white cursor-pointer"
              >
                <span>{items.icon}</span>
                <span>{items.action}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      <div className="sm:p-2 p-2  sm:mt-7 mt-5 text-md flex justify-between">
        <span className="font-extrabold">Today Logs</span>
        <span className="text-gray-500 font-semibold">
          {new Date().toLocaleString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <section className="sm:p-4 p-4 rounded-lg border border-gray-400 shadow-lg sm:mt-3 mt-5 mb-5">
        {currentLogs.map((item) => (
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:p-2 p-2 rounded-lg border border-gray-400 shadow-lg sm:mt-3">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
              <div className="text-gray-500">{item.time}</div>
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <div className="font-bold">{item.title}</div>
                  <div className={`${getNoteColor(item.note)} font-bold`}>
                    {item.note}
                  </div>
                </div>
                <div className="text-gray-500">{item.description}</div>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4 items-center">
              <button className="p-2 rounded-md cursor-pointer transition">
                {item.editIcon}
              </button>
              <button className="p-2 rounded-md cursor-pointer transition">
                {item.deleteIcon}
              </button>
            </div>
          </div>
        ))}
      </section>{" "}
    </>
  );
};

export default DailyLogForm;
