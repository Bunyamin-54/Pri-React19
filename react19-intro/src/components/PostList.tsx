import { use } from "react";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function PostList({postsPromise}:{postsPromise:Promise<Post[]>}) {

    const posts = use(postsPromise)

  return (
    <div>
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
