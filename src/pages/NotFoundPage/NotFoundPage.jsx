import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>
        Sorry, page not found! Please go to <Link to="/">home page</Link>!
      </p>
    </div>
  );
}