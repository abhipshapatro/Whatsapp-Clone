import React from 'react'
import Sidebar from './Sidebar'
import './Home.css';

function Home({currentUser}) {
  return (
    <div className="home">
        <div className="home-container">
            <Sidebar currentUser={currentUser}  />
            <div className="home-bg">
              <img src="images/WhatsAppbg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home