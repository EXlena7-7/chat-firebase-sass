import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src="https://avatars.githubusercontent.com/u/109706655?s=400&u=191a43a1d05d3b143524f014541da83c7a55667c&v=4"/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img src="https://avatars.githubusercontent.com/u/109706655?s=400&u=191a43a1d05d3b143524f014541da83c7a55667c&v=4" />
      </div>
    </div>
  )
}

export default Message
