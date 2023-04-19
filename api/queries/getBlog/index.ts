import { fetchGraphQL } from "@/api";
import {
  Blog,
  AllBlogResponse,
  BlogResponse,
  allBlogQuery,
  getBlogByIdQuery,
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
    });
  });

  return posts;
};

export const getBlogById = async (id: string): Promise<Partial<Blog>> => {
  const productResponse: BlogResponse = (await fetchGraphQL(
    getBlogByIdQuery(id)
  )) as BlogResponse;

  return productResponse.data.blog;
};
