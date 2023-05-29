import Head from "next/head";

export default function Seo({title}) {
  const currentTitle = `Home | ${title}`

  return (
    <Head>
      <title>{currentTitle}</title>
    </Head>
  )
}