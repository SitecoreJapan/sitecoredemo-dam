interface Props {
  pageTitle: string;
  pageDescription: string;
}

export default function HeroArea({ pageTitle, pageDescription }: Props) {
  return (
    <div className="bg-gray-700 py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {pageTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {pageDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
