import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import tw from "tailwind-styled-components";

import Card from "../components/Card";

const MainSection = tw.main`mx-auto p-4`;
const MainGrid = tw.div`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`;
const AppTitle = tw.h1`uppercase font-bold text-center pb-3 text-red-500 text-5xl`;

export default function Home({ data }) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection>
        <AppTitle>List of Repos</AppTitle>
        <MainGrid>
          {data.map((repo) => (
            <Card imgUrl={repo.owner.avatar_url} key={repo.id} description={repo.description} url={repo.html_url} projectFullName={repo.full_name} projectTitle={repo.name} />
          ))}
        </MainGrid>
      </MainSection>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_URL}luisvalgoi/repos`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10,
  };
}
