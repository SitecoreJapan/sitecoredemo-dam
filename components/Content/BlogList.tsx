import { Blog } from "@/interfaces/content";
import BlogCard from "@/components/Content/BlogCard";

interface Props {
  content: Blog[];
}

export default function BlogList({ content }: Props) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-10">
          {content.map((item) => (
            <article
              key={item.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <BlogCard blog={item} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
