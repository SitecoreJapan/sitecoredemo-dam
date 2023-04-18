import { Navi } from "@/interfaces/navi";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project a", href: "#", current: true },
];

interface Props {
  navi: Navi[];
}

export default function Breadcrumbs({ navi }: Props) {
  const items = navi;
  return (
    <nav className="flex bg-gray-100 dark:bg-gray-800" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex space-x-4 rounded-md bg-gray-100 px-6 shadow dark:bg-gray-800"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
            >
              <AiOutlineHome
                className="h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {items.map((item) => (
          <li key={item.name} className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href={item.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
