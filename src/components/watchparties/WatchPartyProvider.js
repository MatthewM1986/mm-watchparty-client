
import React, { useState } from "react"

export const WatchPartyContext = React.createContext()

export const WatchPartyProvider = (props) => {
    const [watchparties, setWatchParties] = useState([])
    const [watchparty, setWatchParty] = useState({})

    const getWatchParties = () => {
        return fetch("http://localhost:8000/watchparties", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(response => response.json())
            .then(setWatchParties)
    }

    const createWatchParty = watchparty => {

        return fetch("http://localhost:8000/watchparties", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watchparty)
        })
            .then(res => res.json())
    }

    const editWatchParty = (watchparty) => {
        return fetch(`http://localhost:8000/watchparties/${watchparty.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(watchparty)
        })
            .then(getWatchParties)
    }

    return (
        <WatchPartyContext.Provider value={{ watchparties, getWatchParties, setWatchParties, watchparty, createWatchParty, setWatchParty }} >
            { props.children}
        </WatchPartyContext.Provider>
    )
}