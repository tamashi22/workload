import Head from 'next/head';
import { AnnouncementsLayout } from '@/layouts/AnnouncementsLayout';
export default function Home() {
  return (
    <>
      <Head>
        <title>Workload</title>
        <meta
          name="description"
          content="Workload calculation and formulation of individual plans"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <AnnouncementsLayout />
      </main>
    </>
  );
}
