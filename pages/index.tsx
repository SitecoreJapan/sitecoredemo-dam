import Footer from "@/components/Footer/Footer";
import HeroArea from "@/components/Header/HeroArea";
import Menu from "@/components/Menu/Menu";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sitecore Content Hub: Experience Edge Sample</title>
      </Head>
      <main>
        <Menu />
        <HeroArea
          pageTitle="Sitecore Content Hub Sample"
          pageDescription="Test"
        />
        <h1 className="text-3xl">Content Hub GraphQL Sample</h1>
        <div>
          <h2 className="text-2xl">Viewer</h2>
          <p>
            <Link href="/products">PCM</Link>
          </p>
          <p>
            <Link href="/assets">assets</Link>
          </p>
          <p>アップデート</p>
        </div>
        <Footer />
      </main>
    </>
  );
}
