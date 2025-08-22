import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

  export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
    const data = await response.json();
    console.log(data);
    // Dispatch the now playing movies to the Redux store
    dispatch(addNowPlayingMovies(data.results));


  }
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  }