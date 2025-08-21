import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useMoviesTrailer= (moviesId)=>{
  const dispatch = useDispatch();
    const trailerVideo= useSelector((store) => store.movies?.trailerVideo);


  //fetch trailer or video data using moviesID
  const getMoviesVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${ moviesId }/videos?language=en-US`,
      API_OPTION
    );
    const data = await response.json();
    console.log(data);
    const filteredVideos = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVideos = filteredVideos.length ? filteredVideos[0] : data.results[0];
    dispatch(addTrailerVideo(trailerVideos));
    // Process the video data as needed
  };

  useEffect(() => {
!trailerVideo && getMoviesVideo(); 
 }, []);
}