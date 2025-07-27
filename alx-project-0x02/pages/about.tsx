// pages/about.tsx
import Head from "next/head";
import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | SoloForge</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-gray-700">
          This project demonstrates a modern Next.js setup with TypeScript and
          Tailwind CSS.
        </p>
      </main>
    </>
  );
}
