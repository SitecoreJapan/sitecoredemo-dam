import { fetchGraphQL } from "@/api";
import {
  Blog,
  AllBlogResponse,
  BlogResponse,
  allBlogQuery,
  getBlogBySlugQuery,
} from "@/interfaces/content";

export const getAllBlog = async (): Promise<Partial<Blog>[]> => {
  const results: AllBlogResponse = (await fetchGraphQL(
    allBlogQuery
  )) as AllBlogResponse;

  const posts: Partial<Blog>[] = [];

  results.data.blog.results.forEach((post: Partial<Blog>) => {
    posts.push({
      id: post.id,
      blog_Title: post.blog_Title,
      blog_Quote: post.blog_Quote,
      blog_Body: post.blog_Quote,
      publicationDate: post.publicationDate,
      locale: post.locale,
      contentName: post.contentName,
      brief: post.brief,
      assets: post.assets,
    });
  });

  return posts;
};

export const getBlogBySlug = async (slug: string): Promise<Partial<Blog>> => {
  const blogResponse: AllBlogResponse = (await fetchGraphQL(
    getBlogBySlugQuery(slug)
  )) as AllBlogResponse;

  return blogResponse.data.blog.results[0];
};
