import { getAllProduct } from "@/api/queries/getProduct";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Breadcrumbs from "@/components/Menu/Breadcrumbs";
import Menu from "@/components/Menu/Menu";
import ProductCard from "@/components/Products/ProductCard";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Navi } from "@/interfaces/navi";
import { Product } from "@/interfaces/product";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";

interface Props {
  products: Product[];
}

export const getStaticProps = async () => {
  const products = await getAllProduct();

  return {
    props: {
      products,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Products: NextPage<Props> = ({ products }) => {
  const getProducts = useMemo(() => (!products ? [] : products), [products]);
  const breadcrumbmenu: Navi[] = [
    { name: "Products", href: "/products", current: true },
  ];

  return (
    <>
      <Head>
        <title>Sitecore Content Hub - Product Content Management</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Product Content Management"
          pageDescription="Centralize and automate the management and maintenance of product data"
        />
        <Breadcrumbs navi={breadcrumbmenu} />
        <div className="mt-7 mb-7 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Product List
              </h1>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
          </div>
          <div className="-mx-4 mt-8 sm:-mx-0">
            <table className=" min-w-full divide-y divide-gray-300 dark:divide-gray-900 dark:bg-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 sm:pl-0"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 lg:table-cell"
                  >
                    Product Number
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 sm:table-cell"
                  >
                    Entity ID
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-50 dark:bg-gray-600">
                {getProducts.map((product) => (
                  <tr key={product.id}>
                    <ProductCard product={product} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Products;
