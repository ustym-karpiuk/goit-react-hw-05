import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { movieActors } from "../../components/movie-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


export default function MovieCast() {
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId === "") {
      return;
  }
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const actors = await movieActors(movieId);

        setCasts(actors);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  
  return (
    <div className={css.blokActors}>
      <h3> About actors</h3>
      {error && <ErrorMessage />}
      <ul className={css.list}>
        {casts &&
          casts.map(({ id, name, profile_path, character }) => (
            <li key={id} className={css.conteiner}>
              <img
                className={css.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt={name}
              />
              <div>
                <h3>{name}</h3>
                <p> Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
      {loading && <Loader />}
    </div>
  );
}