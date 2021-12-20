import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
}

export type PostMarkdownAttributes = {
  title: string;
};

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

export async function getPosts(slug: string) {
  const postsPath = path.join(__dirname, "..", "posts");
  const filePath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filePath);
  const { attributes, body } = parseFrontMatter(file.toString());
  
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filePath} is missing attributes`
  );

  const html = marked(body);

  return { slug, html, title: attributes.title };
}