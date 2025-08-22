import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addNowUpcommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

  export const useUpcommingMovies = () => {
    const dispatch = useDispatch();
  const getUpcommingMovies = async () => {
    const response= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTION);
    const data = await response.json();
    console.log(data);
    // Dispatch the now playing movies to the Redux store
    dispatch(addNowUpcommingMovies(data.results));


  }
  useEffect(() => {
    getUpcommingMovies();
  }, []);
  }