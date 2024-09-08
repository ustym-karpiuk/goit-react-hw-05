import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { movieReviews } from "../movie-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Review() {
  const [review, setReview] = useState(null);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function getReview() {
      try {
        setLoading(true);
        setError(false);
        const revievs = await movieReviews(movieId);

        setReview(revievs);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
  getReview();
  }, [movieId]);
  

  return (
    <div className={css.blokRewiwe}>
      <h2>Review</h2>
      {error && <ErrorMessage />}
      <ul>
        {review &&
          review.map(({ id, author, content }) => (
            <li key={id} className={css.conteiner}>
              <h3>{author}</h3>
              <p> {content}</p>
            </li>
          ))}
      </ul>

      {loading && <Loader />}
    </div>
  );
}