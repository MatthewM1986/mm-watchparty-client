
import React, { useState } from "react"

export const WatchPartyContext = React.createContext()

export const WatchPartyProvider = (props) => {
    const [watchparties, setWatchParties] = useState([])
    const [watchparty, setWatchParty] = useState({})
    const [joinedwatchparty, SetJoinedWatchParty] = useState([])
    console.log("watchpartyies", watchparties)

    const getWatchParties = () => {
        return fetch("http://localhost:8000/watchparties", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(response => response.json())
            .then(setWatchParties)
    }

    const getSingleWatchParty = (id) => {
        return fetch(`http://localhost:8000/watchparties/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(setWatchParty)
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

    const deleteWatchParty = Id => {
        return fetch(`http://localhost:8000/watchparties/${Id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("Token")}`
            },
        })
            .then(getWatchParties)
    }

    const getWatchPartiesByUserId = () => {
        return fetch(`http://localhost:8000/watchparties/user`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            },
        })
            .then(response => response.json())
            .then(setWatchParties)
    }

    const joinWatchParty = watchPartyId => {
        return fetch(`http://localhost:8000/watchparties/${watchPartyId}/signup`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(response => response.json())
            .then(getWatchParties)
    }

    const leaveWatchParty = watchPartyId => {
        return fetch(`http://localhost:8000/watchparties/${watchPartyId}/signup`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(getWatchParties)
    }

    const userJoinWatchParty = () => {
        return fetch(`http://localhost:8000/watchparties/joined`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(response => response.json())
            .then(SetJoinedWatchParty)
    }

    return (
        <WatchPartyContext.Provider value={{ joinedwatchparty, SetJoinedWatchParty, userJoinWatchParty, watchparties, getWatchParties, setWatchParties, getSingleWatchParty, watchparty, createWatchParty, setWatchParty, editWatchParty, getWatchPartiesByUserId, deleteWatchParty, joinWatchParty, leaveWatchParty }} >
            { props.children}
        </WatchPartyContext.Provider>
    )
}