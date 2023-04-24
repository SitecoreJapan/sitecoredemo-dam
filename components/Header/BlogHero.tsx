import Image from "next/image";
import Moment from "react-moment";

interface Props {
  blogTitle: string;
  blogDate: string;
  blogImage: string;
}

export default function HeroArea({ blogTitle, blogDate, blogImage }: Props) {
  const damPublicImage =
    "https://shinharadam.sitecoresandbox.cloud/api/public/content/" + blogImage;
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-12">
        <Image
          src={damPublicImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full opacity-25 object-cover"
          height="1600"
          width="900"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              {blogTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              <Moment format="YYYY/MM/DD">{blogDate?.slice(0, 10)}</Moment>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
