import React, { use } from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
  const langKey= useSelector((store) => store.language.selectedLanguage);
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type="text"
        className='col-span-10 m-4 p-4 bg-white'
         placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button type='submit' className='col-span-2   m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar