import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch('api/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.title}</h4>
        </div>))}
    </>
  )
}