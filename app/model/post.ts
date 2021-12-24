import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  writer: string;
  digest: string;
}

type NewPost = {
  title: string;
  slug: string;
  writer: string;
  digest: string;
  markdown: string;
}

export type PostMarkdownAttributes = {
  title: string;
  writer: string;
  digest: string;
};

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title && attributes?.writer;
}

const postsPath = path.join(__dirname, "..", "posts");
export async function createPost(post: NewPost) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`;
  await fs.writeFile(
    path.join(postsPath, post.slug + ".md"),
    md
  );

  return getPost(post.slug);
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath);

  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(
        path.join(postsPath, filename)
      );

      const { attributes } = parseFrontMatter(
        file.toString()
      );

      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );

      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        writer: attributes.writer,
        digest: attributes.digest
      };
    })
  );
}

export async function getPost(slug: string) {
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