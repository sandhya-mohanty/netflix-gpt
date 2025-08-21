import React from "react";
import {  useSelector } from "react-redux";
import { useMoviesTrailer } from "../hooks/useMoviesTrailer";

const VideoBackground = ({ moviesId }) => {
    const trailerVideo= useSelector((store) => store.movies?.trailerVideo);
    useMoviesTrailer(moviesId)
  

  return (
    <div className="w-screen ">
      <iframe
       className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
       

        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   "id": 755898,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "d9erkpdh5o0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-07-24T18:40:00.000Z",
//       "id": "6882cabfdaa869ed6516b8a5"
//     }
//   ]
// }
