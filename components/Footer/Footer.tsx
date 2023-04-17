import Image from "next/image";
import Link from "next/link";

const navigation = {
  contenthubdam: [
    {
      name: "Get started",
      href: "https://doc.sitecore.com/ch/en/users/42/content-hub/get-started.html",
    },
    {
      name: "Manage Digital Assets",
      href: "https://doc.sitecore.com/ch/en/users/42/content-hub/manage-digital-assets.html",
    },
    {
      name: "Product Content Management",
      href: "https://doc.sitecore.com/ch/en/users/42/content-hub/pcm.html",
    },
    {
      name: "Sitecore Experience Edge",
      href: "https://doc.sitecore.com/ch/en/users/42/content-hub/deliver-content--deliver-content-with-experience-edge.html",
    },
  ],
  contenthubops: [
    {
      name: "Manage Content",
      href: "https://doc.sitecore.com/ch/en/users/42/content-hub/manage-content.html",
    },
    {
      name: "Manage Project",
      href: "https://doc.sitecore.com/ch/en/users/42/content-hub/manage-projects-and-jobs.html",
    },
  ],
  composable: [
    { name: "XM Cloud", href: "https://doc.sitecore.com/xmc/" },
    { name: "Content Hub ONE", href: "https://doc.sitecore.com/ch-one/" },
    { name: "CDP", href: "https://doc.sitecore.com/cdp/#" },
    { name: "Personalize", href: "https://doc.sitecore.com/personalize/" },
    { name: "Send", href: "https://doc.sitecore.com/send/" },
  ],
  corp: [
    { name: "Sitecore", href: "https://www.sitecore.com/" },
    { name: "Developer", href: "https://developers.sitecore.com/" },
    { name: "Partner Network", href: "https://partners.sitecore.com/" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-gray-100 dark:bg-gray-800"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image
            className="h-7"
            src="/content-ops-logo-color.svg"
            alt="Sitecore Content Hub"
            width={100}
            height={100}
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Content Hub DAM
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contenthubdam.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Content Hub Ops
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contenthubops.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Related Products
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.composable.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  About Sitecore
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.corp.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
