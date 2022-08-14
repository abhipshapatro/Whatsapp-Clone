import React from 'react'
import Sidebar from './Sidebar'
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <div className="home-container">
            <Sidebar />
        </div>
    </div>
  )
}

export default Home