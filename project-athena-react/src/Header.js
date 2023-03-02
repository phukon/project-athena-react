import React from 'react';
import { Link } from "react-router-dom";
import {useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Images from './assets/Images';


export default function Header() {
  const {userInfo, setUserInfo} = useContext(UserContext);
  useEffect(()=> {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo =>{
        setUserInfo(userInfo);
      })
    })
  }, [])

    function logout(){
      fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST'
    })
    setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
          <div id='header-logo-section' className='nav-section'><img src={Images.projectAthena} alt = 'logo'/></div>
          <div id='header-nav-section' className='nav-section'>
            <Link to = "/">Home</Link>
            <Link to = "/resources">Resources</Link>
            <Link to = "/events">Events</Link>
            <Link to = "/community">Community</Link>
            <Link to = "/contributors">Contributors</Link>
            <Link to = "/contact">Contact Us</Link>
          </div>
          <div id='header-button-section' className='nav-section'>
            <Link to = "/contribute"> <button>Contribute +</button></Link>
          </div>
          {/* <nav>
            {username && (
              <>
                <Link to = "/create">Create new post</Link>
                <a onClick={logout}>Logout</a>
              </>
            )}

            {!username && (
              <>
                <Link to = "/login">Login</Link>
                <Link to = "/register">Register</Link>
              </>
            )}
          </nav> */}
      </header>
    )
}
