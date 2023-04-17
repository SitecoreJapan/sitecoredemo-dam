import { getAllProduct, getProductById } from "@/api/queries/getProduct";
import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Menu from "@/components/Menu/Menu";
import { REVALIDATE_INTERVAL } from "@/constants/build";
import { Product } from "@/interfaces/product";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface Props {
  productInfo: Product;
}

export const getStaticPaths = async () => {
  const products = await getAllProduct();
  const paths = products.map((product) => ({
    params: { product: product.id },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: { params: { product: any } }) => {
  const id = context.params.product;
  const productInfo = await getProductById(id);
  return {
    props: {
      productInfo,
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

const Product: NextPage<Props> = (props) => {
  const product = props.productInfo;
  const pageTitle = "PCM: " + product.productName;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle={pageTitle}
          pageDescription={"Detail of Product Content: " + product.productName}
        />
        <p className="text-2xl">Name : {product.productName}</p>
        <p>Number: {product.productNumber}</p>
        <Link href="/products">Back to product list</Link>
        <Footer />
      </main>
    </>
  );
};

export default Product;
