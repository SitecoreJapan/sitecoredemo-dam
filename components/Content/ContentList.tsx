import { ContentTitle } from "@/interfaces/content";

interface Props {
  content: Partial<ContentTitle>[];
}

export default function ContentList({ content }: Props) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-10">
          {content.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 ">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publicationDate} className="">
                    {post.publicationDate}
                  </time>
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 ">
                  {post.brief}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
