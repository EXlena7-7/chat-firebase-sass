import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Marjo Chat</span>
        <div className='user'>
            <img src="https://avatars.githubusercontent.com/u/109706655?s=400&u=191a43a1d05d3b143524f014541da83c7a55667c&v=4" alt=""/>
            <span>John</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar
