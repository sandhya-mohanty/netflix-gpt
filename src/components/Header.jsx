import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { use, useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { setLanguage } from '../utils/languageSlice';

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  navigate('/error');
  // An error happened.
});
  }
  const handleGptSearchClick = () => {
    // navigate('/gptsearch');
    dispatch(toggleGptSearchView())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));

  }

  return (
    <div className='absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-20 flex  justify-between  flex-col md:flex-row'>
      <img className='w-48' src={LOGO} alt="" />
    {user &&
      <div className='flex p-2'>
        {showGptSearch && 
        <select className='bg-gray-900 text-white rounded-lg mx-4 px-5 py-2' name="languages" id="language-select" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>  
          ))}

        </select>}
        <button className='py-2 px-4 bg-purple-600 my-2 mx-4 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ?"Home page":"GPT Search"}</button>
        <img className=' w-12 h-12' src={user?.photoURL} alt="" />
        <button className='text-bold  cursor-pointer text-white ' onClick={handleSignOut}>(sign out)</button>
      </div>}
    </div>
  )
}

export default Header