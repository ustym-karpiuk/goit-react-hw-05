import { useEffect, useState } from "react";

import { getMovies } from "../../components/movie-api";

import MovieGallery from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [Movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
        const { results, total_pages } = await getMovies(page);
        setMovies((prevState) => [...prevState, ...results]);
        setTotalPage(total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [page]);

  const hendleLoadMore = async () => {
    setPage(page + 1);
  };
  return (
    <div>
      <h2>Trending movies </h2>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {Movies.length > 0 && <MovieGallery items={Movies} />}

      {totalPage > page && <LoadMoreBtn onClick={hendleLoadMore} />}
    </div>
  );
}