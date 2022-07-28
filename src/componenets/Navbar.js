import React from "react";
import logo from "../pics/logo.png"

export default function Nav() {
    return (
        <nav className="navbar--container">

            <img src={logo} alt="Logo" className="navbar--logo" />
            <h2 className="navbar--title">My Tahiland Travel Journal </h2>
            
        </nav>
    )
}
