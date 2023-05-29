import Seo from "@/components/Seo";

export default function Home({ results }) {

  return (
    <>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
        </div>))}
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