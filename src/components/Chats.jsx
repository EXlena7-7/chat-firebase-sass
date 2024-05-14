import React, {useEffect, useState} from 'react'

const Chats = () => {
  const [chats, setChats] = useState([])
  useEffect(() =>{

  }, [])
  return (
    <div className='chats'>
    <div className='userChat'>
        <img 
        src="https://avatars.githubusercontent.com/u/109706655?s=400&u=191a43a1d05d3b143524f014541da83c7a55667c&v=4"
         alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats