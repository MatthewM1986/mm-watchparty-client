import React from "react"
import { Link } from "react-router-dom"
import "./Auth.css"


export const Login = props => {
    const username = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "Token" in res) {
                    localStorage.setItem("Token", res.Token)
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 style={{ color: 'white' }}>Watch Party</h1>
                    <h4 style={{ color: 'white' }}>Please sign in</h4>
                    <fieldset>
                        <label htmlFor="inputUsername" style={{ color: 'white' }}>  User Name </label>
                        <input ref={username} type="username" id="username" className="form-control" style={{ maxWidth: "40rem" }} placeholder="User Name" required autoFocus />
                    </fieldset>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    <fieldset>
                        <label htmlFor="inputPassword" style={{ color: 'white' }}>  Password </label>
                        <input ref={password} type="password" id="password" className="form-control" style={{ maxWidth: "40rem" }} placeholder="Password" required />
                    </fieldset>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    <fieldset style={{
                        textAlign: "left"
                    }}>
                        <button className="btn btn-primary btn-sm" type="submit">Sign In</button>
                    </fieldset>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                </form>
            </section>
            <section className="link--register">
                <Link to="/register" style={{ color: 'white' }}>Not a member yet?</Link>
            </section>
        </main>
    )
}