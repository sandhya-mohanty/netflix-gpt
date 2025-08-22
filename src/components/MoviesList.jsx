import React from 'react'
import MovieCard from './MovieCard';

const MoviesList = ({title,movies}) => {
  if (!movies || movies.length === 0) return null; // or show a loading message
  console.log(movies);
  
  return (
    <div className='px-7'>
      <h1 className='text-3xl font-bold py-2  text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
<div className='flex'>
   {movies.map((movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
</div>
      </div>
     
    </div>
  )
}

export default MoviesList