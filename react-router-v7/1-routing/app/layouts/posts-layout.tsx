import React from "react";
import { NavLink, Outlet } from "react-router";

export default function PostLayout() {
  return (
    <div>
      <header className="bg-gray-800 text-white p-5 flex justify-between">
        <h1 className="text-yellow-500">Blog Posts Layout</h1>
        <nav className="flex gap-5">
          <NavLink to={"/posts"}>Posts</NavLink>
          <NavLink to={"/posts/new"}>Create post</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
