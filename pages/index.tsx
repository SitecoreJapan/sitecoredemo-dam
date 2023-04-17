import Link from "next/link";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
