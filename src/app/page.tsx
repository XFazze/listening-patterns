import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1>Spoilyzer3</h1>
      <h2>Sign in to analyze your listening patterns</h2>
      <Link href="/signin">Sign in</Link>
    </main>
  );
}
