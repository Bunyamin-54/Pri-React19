import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React router intro class" },
    { name: "description", content: "This is first session with react-router-v7" },
  ];
}

export default function Home() {
  return (
    <div className="pt-16 p-4 container text-center">
      <h1 >React Router V7 Getting Started</h1>
      <h2 className="mt-19">Routing</h2>
    </div>
  )
}
