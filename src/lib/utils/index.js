/**
 * Fetches metadata and paths of all markdown posts from the blog directory.
 *
 * This asynchronous function uses Vite's `import.meta.glob` to dynamically import
 * all markdown files located in the `/src/routes/blog/` directory. It extracts
 * metadata from each markdown file and constructs a list of objects containing
 * the metadata and corresponding path of each post.
 *
 * @returns {Promise<Array<{meta: object, path: string}>>}
 *    A promise that resolves to an array of objects, where each object represents
 *    a blog post and contains:
 *      - `meta`: An object containing the metadata extracted from the markdown file.
 *      - `path`: A string representing the path of the markdown file, derived from
 *         its filename within the blog directory (without the `.md` extension).
 *
 * @example
 * fetchMarkdownPosts().then(posts => {
 *   posts.forEach(post => {
 *     console.log(post.meta.title);
 *     console.log(post.path);
 *   });
 * });
 */
export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("/src/routes/blog/*/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -8);

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );

  return allPosts;
};
