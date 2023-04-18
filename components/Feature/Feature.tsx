import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import Link from "next/link";

const features = [
  {
    name: "Product Content Management",
    description:
      "Centralize and automate the management and maintenance of product data",
    href: "/products",
    icon: MdProductionQuantityLimits,
  },
  {
    name: "Asset Management",
    description:
      "Centralize all your digital assets and deliver them to any customer touchpoint",
    href: "/assets",
    icon: HiOutlinePhotograph,
  },
  {
    name: "Content Management",
    description:
      "Maximize the business value of stronger content by expanding the speed, scale, and quality of content production.",
    href: "/content",
    icon: BsFillPencilFill,
  },
];

export default function Feature() {
  return (
    <div className="dark:bg-gray-900 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-800 dark:text-gray-200">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-800 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400"
                    >
                      Check Entities <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
