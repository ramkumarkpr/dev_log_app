import { useState, useRef, useEffect } from "react";
import TaskIcon from "./assets/icons/taskIcon";
import NoteIcon from "./assets/icons/noteIcon";
import LinkIcon from "./assets/icons/linkIcon";
import DeleteIcon from "./assets/icons/deleteIcon";
import EditIcon from "./assets/icons/editIcon";

interface LogActionsDTO {
  id: number;
  icon?: React.ReactNode;
  action: string;
  label: string;
}

interface CurrentLogsDTO {
  id: number;
  title: string;
  note: string;
  description: string;
  time: string;
}

// ── Modal ──────────────────────────────────────────────────────────────────────
interface AddLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (log: Omit<CurrentLogsDTO, "id" | "time">) => void;
}

const NOTE_TYPES = ["Development", "Bug Fix", "Design", "Research", "Meeting"];

const AddLogModal = ({ isOpen, onClose, onSave }: AddLogModalProps) => {
  const [title, setTitle] = useState("");
  const [noteType, setNoteType] = useState("Development");
  const [description, setDescription] = useState("");
  const [activeActions, setActiveActions] = useState<string[]>([]);
  const backdropRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & ESC key
  useEffect(() => {
    if (!isOpen) return;
    firstInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleAction = (action: string) =>
    setActiveActions((prev) =>
      prev.includes(action)
        ? prev.filter((a) => a !== action)
        : [...prev, action],
    );

  const handleSave = () => {
    if (!title.trim() || !description.trim()) return;
    onSave({
      title: title.trim(),
      note: noteType,
      description: description.trim(),
    });
    setTitle("");
    setNoteType("Development");
    setDescription("");
    setActiveActions([]);
    onClose();
  };

  const logActions: LogActionsDTO[] = [
    { id: 1, icon: <TaskIcon />, action: "task", label: "Task" },
    { id: 2, icon: <NoteIcon />, action: "note", label: "Note" },
    { id: 3, icon: <LinkIcon />, action: "link", label: "Link" },
  ];

  return (
    /* Backdrop */
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => e.target === backdropRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Panel */}
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 id="modal-title" className="text-base font-bold text-gray-900">
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
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
            aria-label="Close"
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
                ref={firstInputRef}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Build Authentication Flow"
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition"
              />
            </div>

            <div className="flex flex-col gap-1 min-w-32.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Category
              </label>
              <select
                value={noteType}
                onChange={(e) => setNoteType(e.target.value)}
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/25 transition appearance-none cursor-pointer"
              >
                {NOTE_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                    {active && <span className="ml-0.5 text-[#D4AF37]">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-6 py-4 bg-gray-50/60">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!title.trim() || !description.trim()}
            className="rounded-lg bg-[#D4AF37] px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#C4A030] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Save Log
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────
const Sample = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentLogs, setCurrentLogs] = useState<CurrentLogsDTO[]>([
    {
      id: 1,
      title: "Build Authentication Flow",
      note: "Development",
      description:
        "Implemented login, register and forgot password API using Node.js and MongoDB",
      time: "10:30 AM",
    },
    {
      id: 2,
      title: "Fix Dashboard Analytics Bug",
      note: "Bug Fix",
      description: "Resolved chart rendering issue on mobile devices",
      time: "11:15 AM",
    },
    {
      id: 3,
      title: "Dashboard UI Refresh",
      note: "Design",
      description: "Updated dashboard cards and activity feed UI",
      time: "01:00 PM",
    },
  ]);

  const handleSave = (log: Omit<CurrentLogsDTO, "id" | "time">) => {
    const now = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentLogs((prev) => [{ id: Date.now(), time: now, ...log }, ...prev]);
  };

  const handleDelete = (id: number) =>
    setCurrentLogs((prev) => prev.filter((l) => l.id !== id));

  const getNoteStyle = (note: string) => {
    const map: Record<string, string> = {
      Development: "bg-green-50 text-green-700 ring-green-200",
      "Bug Fix": "bg-red-50 text-red-600 ring-red-200",
      Design: "bg-amber-50 text-amber-700 ring-amber-200",
      Research: "bg-blue-50 text-blue-700 ring-blue-200",
      Meeting: "bg-purple-50 text-purple-700 ring-purple-200",
    };
    return map[note] ?? "bg-gray-100 text-gray-600 ring-gray-200";
  };

  return (
    <>
      <AddLogModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />

      {/* ── Log Entry Trigger ── */}
      <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 mt-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-900">
              What did you work on today?
            </p>
            <p className="text-sm text-gray-400 mt-0.5">
              Keep a record of your progress
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#C4A030] transition"
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

        {/* Quick stats strip */}
        <div className="mt-4 grid grid-cols-3 divide-x divide-gray-100 rounded-lg border border-gray-100 bg-gray-50">
          {[
            { label: "Today's Logs", value: currentLogs.length },
            {
              label: "Development",
              value: currentLogs.filter((l) => l.note === "Development").length,
            },
            {
              label: "Bug Fixes",
              value: currentLogs.filter((l) => l.note === "Bug Fix").length,
            },
          ].map(({ label, value }) => (
            <div key={label} className="py-3 px-4 text-center">
              <p className="text-xl font-extrabold text-gray-900">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Today Logs ── */}
      <div className="mt-7 mb-3 flex items-center justify-between px-0.5">
        <h2 className="text-sm font-extrabold text-gray-800 uppercase tracking-wide">
          Today's Logs
        </h2>
        <span className="text-xs text-gray-400 font-medium">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      <section className="flex flex-col gap-3">
        {currentLogs.length === 0 && (
          <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center text-gray-400 text-sm">
            No logs yet — add your first entry above.
          </div>
        )}

        {currentLogs.map((item) => (
          <div
            key={item.id}
            className="group flex items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm hover:border-[#D4AF37]/40 hover:shadow-md transition"
          >
            {/* Left: time */}
            <div className="shrink-0 pt-0.5">
              <span className="text-xs font-semibold text-gray-400 tabular-nums">
                {item.time}
              </span>
            </div>

            {/* Center: content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-bold text-gray-900 text-sm truncate">
                  {item.title}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ${getNoteStyle(item.note)}`}
                >
                  {item.note}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Right: actions */}
            <div className="flex shrink-0 items-center gap-1 opacity-0 group-hover:opacity-100 transition">
              <button
                className="grid h-8 w-8 place-items-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
                aria-label="Edit log"
              >
                <EditIcon />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="grid h-8 w-8 place-items-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition"
                aria-label="Delete log"
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Sample;
