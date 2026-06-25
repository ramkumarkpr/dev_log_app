import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/admin/login/Login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import DailyLog from "./pages/admin/dailyLog/DailyLog";
import Sample from "./sample";
import SummaryDashBoard from "./pages/admin/aiSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/daily-log",
    element: <DailyLog />,
  },
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path: "/ai-summary",
    element: <SummaryDashBoard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>,
);
