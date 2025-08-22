import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggetions from './GptMoviesSuggetions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
              <img className="min-h-screen object-cover w-full"
                src={BG_URL}
                alt=""
              />
            </div>
      <GptSearchBar/>
      <GptMoviesSuggetions/>
    </div>
  )
}

export default GptSearch