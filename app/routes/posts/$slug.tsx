import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPosts } from "~/post";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");

  return getPosts(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
  );
}