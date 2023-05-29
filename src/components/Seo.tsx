import Head from "next/head";

export default function Seo({title}) {
  return (
    <Head>
      <title>Home | {title}</title>
    </Head>
  )
}