import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <h1>Prarambh</h1>
        <main>
           <HashLink to={"/#home"}>Home</HashLink>
           <Link 
             to={"/contact"} 
             onClick={() => window.scrollTo(0, 0)}
           >
             Contact
           </Link>
           <HashLink to={"/#about"}>About</HashLink>
           <Link to={"/brands"} onClick={() => window.scrollTo(0, 0)}>Brands</Link>
           <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header