import { Product } from "@/interfaces/product";
import AssetCard from "../Assets/AssetCard";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const assetList = product.asset.results;
  return (
    <div className="dark:bg-gray-900 px-4 py-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
          Product Name: {product.productName}
        </h2>
        <div className="text-gray-700">ID: {product.id}</div>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 ">
          <div key="label" className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900 dark:text-gray-200">
              Label
            </dt>
            <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {product.productLabel["en-US"]}
            </dd>
          </div>
          <div key="labelja" className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900 dark:text-gray-200">
              ラベル
            </dt>
            <dd className="mt-2 text-sm text-gray-500">
              {product.productLabel["ja-JP"]}
            </dd>
          </div>
          <div key="label" className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900 dark:text-gray-200">
              Short Description
            </dt>
            <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {product.productShortDescription["en-US"]}
            </dd>
          </div>
          <div key="shortDescription" className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900 dark:text-gray-200">
              短い概要
            </dt>
            <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {product.productShortDescription["ja-JP"]}
            </dd>
          </div>
          <div key="label" className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900 dark:text-gray-200">
              Long Description
            </dt>
            <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {product.productLongDescription["en-US"]}
            </dd>
          </div>
          <div key="shortDescription" className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900 dark:text-gray-200">
              長い概要
            </dt>
            <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {product.productLongDescription["ja-JP"]}
            </dd>
          </div>
        </dl>
        <h2 className="text-2xl mt-8">Related Assets</h2>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-10 ml-10 mr-10 mb-10 "
        >
          {assetList.map((asset) => (
            <>
              <AssetCard asset={asset} />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
