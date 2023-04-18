import { Product } from "@/interfaces/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <>
      <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-300 sm:w-auto sm:max-w-none sm:pl-0">
        {product.productName}
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 dark:text-gray-400 lg:table-cell">
        {product.productNumber}
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 dark:text-gray-400 sm:table-cell">
        {product.id}
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <a
          href={"/products/" + product.id}
          className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-500"
        >
          View detail<span className="sr-only">, {product.productNumber}</span>
        </a>
      </td>
    </>
  );
}
