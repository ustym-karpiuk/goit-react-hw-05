import {Link, useLocation } from "react-router-dom";


// import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

import css from "./MovieList.module.css";

export default function MovieGallery({ items }) {
  const location = useLocation();
  return (
    <ul className={css.movList}>
      {items.map(({ id, title}) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}