import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchMovie = form.elements.searchMovie.value;

    if (searchMovie.trim() === "") {
      toast("Ooops! You haven't typed anything...", {
        style: {
          color: "red",
        },
      });
      return;
    }

    onSearch(searchMovie);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchMovie"
          autoComplete="off"
          autoFocus
          placeholder="Type something..."
        />
        <button className={css.btn} type="submit">
          Find!
        </button>
        <Toaster />
      </form>
    </header>
  );
}