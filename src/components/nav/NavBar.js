import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



export const NavBar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand">Watch Party</a>
            &nbsp;&nbsp;&nbsp;
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <button className="btn btn-secondary" onClick={() => {
                        props.history.push(`/`)
                    }}>Profile
            </button>
            &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-secondary" onClick={() => {
                        props.history.push(`/games`)
                    }}>Games
            </button>
            &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-secondary" onClick={() => {
                        props.history.push(`/watchparties`)
                    }}>Watch Parties
            </button >
            &nbsp;&nbsp;&nbsp;
                    {
                        (localStorage.getItem("Token") !== null) ?
                            <button className="btn btn-secondary"
                                onClick={() => {
                                    localStorage.removeItem("Token")
                                    props.history.push({ pathname: "/" })
                                }}
                            >Logout</button > :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                    }        </ul>
            </div>
        </nav>
    )
}