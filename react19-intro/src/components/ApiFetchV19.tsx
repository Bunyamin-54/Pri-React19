// useEffect -> bir verinin degismesi sonucunda yapmak istedigmiz islemleri bu hook icinde yapariz.

import { Suspense } from "react";
import PostList from "./PostList";

export default function ApiFetchV19() {
  //
  const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    async (res) => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      return res.json();
    }
  );


  return (
    <div>
      <h2>Posts</h2>
      <Suspense fallback={<h3 style={{ color: "red" }}>Loading posts...</h3>}>
        <PostList postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}
