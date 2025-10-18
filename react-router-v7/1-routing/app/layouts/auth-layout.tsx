import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center min-h-screen gap-20">
        <div className="flex flex-col items-center gap-y-6">
            <h1>Wiking Company</h1>
            <img className="w-40 rounded-4xl" src="https://picsum.photos/seed/picsum/200/300" alt="Wiking Company image" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
      <Outlet />
    </div>
  );
}
