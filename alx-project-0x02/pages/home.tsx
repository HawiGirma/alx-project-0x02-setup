// pages/home.tsx
import Head from "next/head";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | SoloForge</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p className="text-gray-700">
          This is the home page of your Next.js project.
        </p>
      </main>
    </>
  );
}
