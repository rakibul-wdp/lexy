import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-3xl font-bold mb-5">This is Home Page</h1>
      <Link href="/documents" className="btn btn-primary text-secondary">Go To Documents Page</Link>
    </main>
  )
}
