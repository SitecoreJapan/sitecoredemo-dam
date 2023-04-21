import { Blog } from "@/interfaces/content";
import Link from "next/link";
import moment from "moment";
import Moment from "react-moment";

interface Props {
  blog: Blog;
}

export default function RecipeCard({ blog }: Props) {
  const yearmonthdate = blog.publicationDate.slice(0, 10);
  // const blogUrl = "/blog/" + moment(yearmonthdate).format("YYYY/MM/DD/") + encodeURI(blog.blog_Title);
  const blogUrl = "/blog/" + blog.id;

  return (
    <div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 ">
          <Link href={blogUrl}>
            <span className="absolute inset-0" />
            {blog.blog_Title}
          </Link>
        </h3>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={blog.publicationDate} className="">
            <Moment format="YYYY/MM/DD">{yearmonthdate}</Moment>
          </time>
        </div>
        <p className="mt-5 line-clamp-3 text-sm leading-6 ">
          {blog.blog_Quote}
        </p>
      </div>
    </div>
  );
}
