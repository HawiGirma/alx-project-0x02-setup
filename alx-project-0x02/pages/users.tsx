// pages/users.tsx
import Head from "next/head";
import Header from "../components/layout/Header";

export default function UsersPage() {
  return (
    <>
      <Head>
        <title>Users | SoloForge</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <p className="text-gray-700">
          Here you will find a list of users fetched from an external API.
        </p>
        {/* UserCard components will be rendered here */}
      </main>
    </>
  );
}
