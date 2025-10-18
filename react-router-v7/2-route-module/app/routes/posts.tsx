import type { Route } from "./+types/posts";

export function loader(){
  console.log('this is ssr');
}

export function clientLoader(){
  console.log('this is csr');
}

export default function posts({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  console.log('hi');

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">posts</h1>
      {/* <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>action Data: {JSON.stringify(actionData)}</p>
      <p>params Data: {JSON.stringify(params)}</p>
      <p>mathes Data: {JSON.stringify(matches)}</p> */}
      {/* <Baksabircompanent /> */}
      {/* {Baksabircompanent()} */}





    </div>
  );
}

// Default olmayan hic bir fn ekrana basilmaz. sen kullanmadikca
export function Baksabircompanent() {
  return <h1>this is another one</h1>;
}
