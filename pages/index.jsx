import Head from "next/head";
import { CHome } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FutureTech</title>
        <meta name="description" content="FutureTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CHome />
      </main>
    </div>
  );
}
