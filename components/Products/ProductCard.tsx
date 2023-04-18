import { PUBLICLLINK_HOST } from "@/constants/build";
import { Product } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const productThumnail = product.masterAsset.results[0].publicLink;
  return (
    <>
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-300 sm:w-auto sm:max-w-none sm:pl-0">
        <div className="flex items-center">
          <div className="h-11 w-11 flex-shrink-0">
            {productThumnail ? (
              <Link href={"/products/" + product.id}>
                <Image
                  src={
                    PUBLICLLINK_HOST +
                    "/api/public/content/" +
                    productThumnail.results[0].relativeUrl
                  }
                  alt={product.productName}
                  height="600"
                  width="400"
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
              </Link>
            ) : (
              <p>No Image</p>
            )}
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {product.productName}
            </div>
          </div>
        </div>
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 dark:text-gray-400 lg:table-cell">
        {product.productNumber}
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 dark:text-gray-400 sm:table-cell">
        {product.id}
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <Link
          href={"/products/" + product.id}
          className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-500"
        >
          View detail<span className="sr-only">, {product.productNumber}</span>
        </Link>
      </td>
    </>
  );
}
