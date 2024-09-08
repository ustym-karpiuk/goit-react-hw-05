import css from './MovieDetailsPage.module.css'
import { Suspense, useEffect, useRef, useState } from "react";
import {
 
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { movieDetal } from "../../components/movie-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieCard from "../../components/MoiveCard/MoiveCard";

export default function MovieDetailsPage() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   
    async function getDetails() {
      try {
        setLoading(true);
        setError(false);
        const fullDetalls = await movieDetal(movieId);

        setDetails(fullDetalls);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, [movieId]);

  const goBack = useRef(location.state ?? '/movies')
  
  return (
    <div className={css.page}>
      <NavLink to={goBack.current} className={css.backbtn}> Go back </NavLink>
      {error && <ErrorMessage />}
      {details && <MovieCard details={details} />}
      <ul>
        <li>
          <NavLink to="actors">Actors info</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Movie reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        
        <Outlet />
      </Suspense>
      {loading && <Loader />}
    </div>
  );
}