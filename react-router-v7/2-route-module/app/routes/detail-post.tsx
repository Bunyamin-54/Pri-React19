import React from "react";
import type { Route } from "./+types/detail-post";

export default function DetailPost({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>action Data: {JSON.stringify(actionData)}</p>
      <p>params Data: {JSON.stringify(params)}</p>
      <p>mathes Data: {JSON.stringify(matches)}</p>
    </div>
  );
}
