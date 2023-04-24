import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import { Navi } from "@/interfaces/navi";
import Menu from "@/components/Menu/Menu";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Blog } from "@/interfaces/content";
import { getAllBlog, getBlogBySlug } from "@/api/queries/getBlog";
import moment from "moment";
import Moment from "react-moment";
import Head from "next/head";
import BlogHero from "@/components/Header/BlogHero";

interface Props {
  post: Partial<Blog>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllBlog();
  const slugs: [string, string, string, string][] = [];

  allPosts.forEach((item) => {
    const publication = item.publicationDate
      ? item.publicationDate.slice(0, 10) || ""
      : "";
    const publicationYear = publication.slice(0, 4);
    const publicationMonth = publication.slice(5, 7);
    const publicationDay = publication.slice(8, 10);

    const slug = item.contentName ? item.contentName || "" : "";

    slugs.push([publicationYear, publicationMonth, publicationDay, slug]);
  });

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string[];

  const lastSlug = slug[slug.length - 1];

  const getPost = await getBlogBySlug(lastSlug);

  return {
    props: {
      post: getPost,
    },
  };
};

const BlogPostPage = ({ post }: Props) => {
  const router = useRouter();

  const pageTitle = post?.blog_Title || "Default Title";
  const description = post?.blog_Quote || "no description";

  const metaDescription = description.replace(/<[^>]+>/g, "");

  const breadcrumbmenu: Navi[] = [
    { name: "Content", href: "/content", current: false },
    { name: "Blog", href: "/blog", current: false },
    { name: pageTitle, href: "#", current: true },
  ];

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <main>
        <Menu />
        <BlogHero
          blogTitle={pageTitle}
          blogDate={post.publicationDate || ""}
          blogImage={
            post.assets?.results[0].publicLink?.results[0].relativeUrl || ""
          }
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <div className="mt-4 ml-8 mr-8 mb-7">
          <div className="mt-4 mb-4">
            <div dangerouslySetInnerHTML={{ __html: post.blog_Quote || "" }} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.blog_Body || "" }} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default BlogPostPage;
