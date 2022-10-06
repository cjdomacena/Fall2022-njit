export const generateUniqueCategories = (
  posts: Record<string, any>[]
) => {
  const uniqueCategories: string[] = [];
  posts.map((post) => {
    const category = post.frontmatter.category;
    if (
      category &&
      !uniqueCategories.includes(category)
    ) {
      uniqueCategories.push(category);
    }
  });

  return uniqueCategories;
};

export const generateCategoryPosts = (
  posts: Record<string, any>[]
) => {
  return posts
    .map((post) => {
      return {
        slug: post.frontmatter.slug,
        title: post.frontmatter.title,
        date: new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(
          new Date(post.frontmatter.date)
        ),
        category: post.frontmatter.category,
      };
    })
    .sort(
      (a, b) =>
        Number(new Date(b.date).valueOf()) -
        Number(new Date(a.date).valueOf())
    );
};
