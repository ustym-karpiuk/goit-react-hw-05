import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";


//   Tranding

export const getMovies = async (page) => {

const url ="https://api.themoviedb.org/3/trending/movie/day"; 
const options = {
  params: {
    page: page,   
  },
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjMyYzg3ODQ4YWY3OTgyODQwMDk4ZjI4ZmRjNDUzZSIsIm5iZiI6MTcyNTc5MjY1Mi4wNTgzOTYsInN1YiI6IjY2ZGQ4MDZiZDljZjExMjNhOWY1ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyGnEXzgjQAaHcS-zh4aETA9j8Ct6F2B_N8wKzLPOOo",
  },
}; 
   try {
     const response = await axios.get(url, options);
    return response.data;
       
   } catch (error) {
     console.error("Error fetching articles:", error);
     throw error;
   }
};

// Search-bar

export const searchMovies = async (searchQuery, page) => {
  try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query: searchQuery,
          page: page,
        },
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjMyYzg3ODQ4YWY3OTgyODQwMDk4ZjI4ZmRjNDUzZSIsIm5iZiI6MTcyNTc5MjY1Mi4wNTgzOTYsInN1YiI6IjY2ZGQ4MDZiZDljZjExMjNhOWY1ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyGnEXzgjQAaHcS-zh4aETA9j8Ct6F2B_N8wKzLPOOo",
        },
      }
    );
      return response.data;
      
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Details

export const movieDetal = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjMyYzg3ODQ4YWY3OTgyODQwMDk4ZjI4ZmRjNDUzZSIsIm5iZiI6MTcyNTc5MjY1Mi4wNTgzOTYsInN1YiI6IjY2ZGQ4MDZiZDljZjExMjNhOWY1ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyGnEXzgjQAaHcS-zh4aETA9j8Ct6F2B_N8wKzLPOOo",
        },
      }
    );
    return response.data;
      
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Actors

export const movieActors = async (id) => {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjMyYzg3ODQ4YWY3OTgyODQwMDk4ZjI4ZmRjNDUzZSIsIm5iZiI6MTcyNTc5MjY1Mi4wNTgzOTYsInN1YiI6IjY2ZGQ4MDZiZDljZjExMjNhOWY1ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyGnEXzgjQAaHcS-zh4aETA9j8Ct6F2B_N8wKzLPOOo",
        },
      }
    );
    return response.data.cast;
      
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Reviews

export const movieReviews = async (id) => {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjMyYzg3ODQ4YWY3OTgyODQwMDk4ZjI4ZmRjNDUzZSIsIm5iZiI6MTcyNTc5MjY1Mi4wNTgzOTYsInN1YiI6IjY2ZGQ4MDZiZDljZjExMjNhOWY1ZmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyGnEXzgjQAaHcS-zh4aETA9j8Ct6F2B_N8wKzLPOOo",
        },
      }
    );
    return response.data.results;
  
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};