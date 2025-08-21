import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { use, useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((store) => store.user);
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


  return (
    <div className='absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between  flex-col md:flex-row'>
      <img className='w-48' src={LOGO} alt="" />
    {user &&
      <div className='flex p-2'>
        <img className=' w-12 h-12' src={user?.photoURL} alt="" />
        <button className='text-bold  cursor-pointer text-white ' onClick={handleSignOut}>(sign out)</button>
      </div>}
    </div>
  )
}

export default Header