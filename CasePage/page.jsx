import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">AI Mystery Game</h1>
      <Link href="/case">
        <button className="mt-4 px-4 py-2 bg-blue-500 rounded-lg">Start Investigating</button>
      </Link>
    </main>
  );
}