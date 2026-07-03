import React from "react";
import "../../styles/header.css"
import { Link } from "react-router-dom";
// defining a TypeScript interface for props

import type { HeaderProps } from "../../types/global";
//creating header component using the props

const Header : React.FC<HeaderProps> = ({title})=>{
    return(
        <header className="header">
            <h1 className="title">{title}</h1>
            <nav className="nav">
                <ul className="list-container">
                   <li className="list"><Link to={"/"}>Home</Link></li>
                   <li className="list"><Link to={"/about"}>About</Link></li> 
                </ul>
               
            </nav>
        </header>
    )
}

export default Header
