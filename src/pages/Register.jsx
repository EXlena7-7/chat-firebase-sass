import React from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { update } from 'firebase/database';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
        
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(

    (error) => {
      setErr(true);
    }, 
    () => {

      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "users", res.user.uid),{
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "userChats", res.user.uid),{});
        navigate("/")
      });
    }
  );



    }catch(err){
      setErr(true);
    }
    };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style={{display:"none"}} type="file" id="file"/>
            <label htmlFor="file">
                <img src={Add} alt=''/>
                <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account?</p>
        
      </div>
    </div>
  )
}

export default Register
