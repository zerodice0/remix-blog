export type Post = {
  slug: string;
  title: string;
}

export function getPosts() {
  const posts: Post[] = [
    {
      slug: "my-first-post",
      title: "My first post"
    },
    {
      slug: "90s-mixtape",
      title: "A mixtape I made just for you"
    }
  ];

  return posts;
}