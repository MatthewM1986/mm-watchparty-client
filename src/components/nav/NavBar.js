import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/games">Games</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/watchparties">Watch Parties</Link>
            </li>
            {
                <li className="nav-item">
                    (localStorage.getItem("Token") !== null) ?
                        <button className="nav-link fakeLink"
                        onClick={() => {
                            localStorage.removeItem("Token")
                            props.history.push({ pathname: "/login" })
                        }}
                    >Logout</button>
                </li>
            }
        </ul>
    )
}