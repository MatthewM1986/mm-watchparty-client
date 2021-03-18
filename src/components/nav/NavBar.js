import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <button className="navbutton" onClick={() => {
                props.history.push(`/`)
            }}>Profile
            </button>
            <button className="navbutton" onClick={() => {
                props.history.push(`/games`)
            }}>Games
            </button>
            <button className="navbutton" onClick={() => {
                props.history.push(`/watchparties`)
            }}>Watch Parties
            </button>
            {
                (localStorage.getItem("Token") !== null) ?
                    <button className="navbutton"
                        onClick={() => {
                            localStorage.removeItem("Token")
                            props.history.push({ pathname: "/" })
                        }}
                    >Logout</button> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}