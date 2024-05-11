import React, { useContext, useState } from "react";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = () =>{
    const q = query(
      collection(db, "users"), 
      where("displayName", "==", username)
    );
  };

  const handleKey = (e) =>{
    e.code === "Enter" && handleSearch();
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input 
        type="text" 
        placeholder="Find a user"
        onKeyDown={handleKey} 
        onChange={e=>setUsername(e.target.value)}/>
        
      </div>
      <div className='userChat'>
        <img src="https://avatars.githubusercontent.com/u/109706655?s=400&u=191a43a1d05d3b143524f014541da83c7a55667c&v=4" alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
