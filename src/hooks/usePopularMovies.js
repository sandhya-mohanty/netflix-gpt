import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import {  addNowPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

  export const usePopularMovies = () => {
    const dispatch = useDispatch();
  const getNowPopularMovies = async () => {
    const response= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION);
    const data = await response.json();
    console.log(data);
    // Dispatch the now playing movies to the Redux store
    dispatch(addNowPopularMovies(data.results));


  }
  useEffect(() => {
    getNowPopularMovies();
  }, []);
  }