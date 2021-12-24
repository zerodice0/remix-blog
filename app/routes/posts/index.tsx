import { Link, useLoaderData } from "remix";
import { getPosts } from "~/model/post";
import type { Post } from "~/model/post";

export const loader = () => {
  return getPosts();
}

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  
  return (
    <div>
      <hgroup>
        <h1>Posts</h1>
        <h3>{posts.length} posts uploaded.</h3>
      </hgroup>
      
      {posts.map(post => (
        <article key={post.slug}>
          <header>
            <hgroup>
              <h1>
                <Link to={post.slug}>{post.title}</Link>
              </h1>
              <h4>
                by {post.writer}
              </h4>
            </hgroup>
          </header>
          {post.digest}
          <footer>
            <Link to={post.slug}>Read more</Link>
          </footer>
        </article>
      ))}
      
    </div>
  );
}
