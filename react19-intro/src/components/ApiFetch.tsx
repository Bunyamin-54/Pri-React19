// useEffect -> bir verinin degismesi sonucunda yapmak istedigmiz islemleri bu hook icinde yapariz.

import { useEffect, useState } from "react";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function ApiFetch() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []); // egerki array bos birakirsan sayfa ilk renderlandiginda useEffect calisir.

  if (loading) {
    return <h5 style={{ color: "red" }}>Data loading...</h5>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
