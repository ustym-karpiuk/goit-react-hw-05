import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";

import axios from "axios";
import { searchMovies } from "../../components/movie-api";
import { useEffect, useState } from "react";
import MovieGallery from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
  const [Movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("movie") ?? "";

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
        setMovies([]);
        const { results, total_pages } = await searchMovies(searchQuery, page);
        setTotalPage(total_pages);
        setMovies((prevState) => [...prevState, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [searchQuery, page]);

  const hendleLoadMore = async () => {
    setPage(page + 1);
  };


  const handleSearch = async (searchQuery) => {
    searchParams.set("movie", searchQuery);


    setSearchParams(searchParams);
  };



  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}
      {Movies.length > 0 && <MovieGallery items={Movies} />}

      {totalPage > page && <LoadMoreBtn onClick={hendleLoadMore} />}

      {loading && <Loader />}
    </div>
  );
}