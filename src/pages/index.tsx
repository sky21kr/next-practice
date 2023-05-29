import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  
  return (
    <>
      <Seo title="Home" />
      {results?.map((movie) => (
          <Link href={{
            pathname: `/movies/${movie.id}`,
            query: { title: movie.title },
          }} as={`/movies/${movie.id}`} key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            <h4>{movie.title}</h4>
          </Link>))}
    </>
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch('http://localhost:3000/api/movies')).json();

  return {
    props: {
      results,
    }
  }
}