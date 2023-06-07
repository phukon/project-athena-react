import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Images from './assets/Images';


import './Navbar.css'

export function Navbar({
    backgroundColor,
    fontColor,
    brand,
    links
}){

    const [isMenuClosed, setMenuClosed] = useState(true);

    return(
        <div className="nav-container" style={{backgroundColor: backgroundColor, color: fontColor}}>
        <nav>
        <Link to='/'><div className="nav-brand">{brand}</div></Link>
            <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            <div className="nav-links">
                {links.map((node) =>{
                    return(<Link key={node.text} to={node.link} style={{color: fontColor}}>{node.text}</Link>);
                })}
            </div>

        </nav>
        <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
            <div style={{backgroundColor: backgroundColor}}>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                <div className="overlay-menu-wrapper">
                    <div className="overlay-menu">
                        {links.map((node) =>{
                            return(<Link key={node.text} to={node.link} onClick={() => setMenuClosed(!isMenuClosed)} className="overlay-menu-item" style={{color: fontColor}}>{node.text}</Link>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

Navbar.defaultProps = {
    backgroundColor : 'white',
    fontColor: 'black',
    brand: <img src={Images.projectAthena} alt="logo"/>,
    links:[
        {text: "Home", link:"/"},
        {text: "Resources", link:"/resources"},
        {text: "Events", link:"/events"},
        {text: "Gossips", link:"/gossips"},
        {text: "Community", link:"/community"},
        {text: "Contributors", link:"/contributors"},
    ]
}