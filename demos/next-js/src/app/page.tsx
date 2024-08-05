;
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next Demo</h1>
      <ul>
        <li>
          <Link href="/package-import">Go to package import example</Link>
        </li>
        <li>
          <Link href="/define-custom-elements"> Go to defineCustomElements example</Link>
        </li>
      </ul>
    </main>
  );
}