import { Link, useLocation } from "react-router-dom";
import type { JSX, ReactNode } from "react";
import Logo from "../assets/icons/logo";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
  badge?: number | string;
  logo?: string;
}

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Daily Log",
    href: "/daily-log",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    name: "AI Summary",
    href: "/ai-summary",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    name: "AI Assistant",
    href: "/ai-assistant",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
  {
    name: "Learning Path",
    href: "/learning-path",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    name: "Settings",
    href: "/settings",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const bottomItems = [
  {
    name: "Logout",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    ),
    logo: "R",
  },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-72 shadow-xl bg-[#0A0A0A] overflow-y-auto
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col p-6 h-full">
          {/* Logo */}
          <div className="flex items-center justify-between pb-6 border-b border-blue-600/30">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 leading-none">
                <Logo />
                <h1 className="text-2xl uppercase font-extrabold bg-linear-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  <span className="inline-block -rotate-90 text-xl uppercase font-bold bg-linear-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    {``}
                  </span>
                  {` Dev Log`}
                </h1>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-xl md:hidden text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Main nav */}
          <nav className="flex-1 mt-6 space-y-1">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                icon={item.icon}
                label={item.name}
                href={item.href}
                active={location.pathname === item.href}
                onClick={onClose}
              />
            ))}
          </nav>

          {/* Bottom items (Logout) */}
          <div className="pt-4 border-t border-blue-600/30 space-y-1 flex flex-col items-start">
            {bottomItems.map((item) => (
              <NavBottom
                key={item.href}
                icon={item.icon}
                label={item.name}
                href={item.href}
                logo={item.logo}
                active={location.pathname === item.href}
                onClick={onClose}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({
  icon,
  label,
  href,
  active,
  onClick,
  badge,
}: NavItemProps): JSX.Element {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
        active
          ? "bg-[#D4AF37] text-white"
          : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <span className="font-medium text-sm">{label}</span>
      </div>
      {badge && (
        <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}

function NavBottom({
  icon,
  label,
  href,
  active,
  onClick,
  logo,
}: NavItemProps): JSX.Element {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-white">
          {logo}
        </span>
        <span className="font-medium text-sm">{label}</span>
        <span>{icon}</span>
      </div>
    </Link>
  );
}
