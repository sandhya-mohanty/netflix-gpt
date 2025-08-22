import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addNowTendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

  export const useTrendingMovies = () => {
    const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const response= await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', API_OPTION);
    const data = await response.json();
    console.log(data);
    // Dispatch the now playing movies to the Redux store
    dispatch(addNowTendingMovies(data.results));


  }
  useEffect(() => {
    getTrendingMovies();
  }, []);
  }