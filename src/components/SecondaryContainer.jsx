import React, { use } from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
 movies.nowPlayingMovies && (
<div className='bg-black'>
     <div className='mt-0 md:-mt-35 pl-4 md:pl-12 relative z-20'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MoviesList title={"Trending"} movies={movies.trandingMovies} />
     <MoviesList title={"Popular"} movies={movies.popularMovies} />
     <MoviesList title={"Upcoming Movies"} movies={movies.upcommingMovies}/>
      <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
</div>
 )
   
  )
}

export default SecondaryContainer