import { Link, NavLink, Outlet } from "react-router";

// ctrl + alt + arrows
export default function dashboard() {
  return (
    <div className="flex gap-6">
      <aside className=" w-64 h-screen bg-gray-800 rounded pt-5">
        <h2 className="text-xl font-bold text-white mb-4 text-center">
          Dashboard
        </h2>
        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `link ${isActive ? "active" : "inactive"}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/stats"
            className={({ isActive }) =>
              `link ${isActive ? "active" : "inactive"}`
            }
          >
            Stats
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `link ${isActive ? "active" : "inactive"}`
            }
            to="/dashboard/analytics"
          >
            Analytics
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `link ${isActive ? "active" : "inactive"}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `link ${isActive ? "active" : "inactive"}`
            }
            to="/dashboard/settings"
          >
            Settings
          </NavLink>
        </nav>
      </aside>
      <main className="border flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
}
