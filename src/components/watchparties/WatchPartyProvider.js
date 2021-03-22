
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
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(watchparty)
        })
            .then(res => res.json())
    }

    // const joinWatchParty = watch_party_id => {
    //     return fetch(`http://localhost:8000/events/${watch_party_id}/signup`, {
    //         method: "POST",
    //         headers: {
    //             "Authorization": `Token ${localStorage.getItem("lu_token")}`
    //         }
    //     })
    //         .then(response => response.json())
    // }

    return (
        <WatchPartyContext.Provider value={{ watchparties, getWatchParties, setWatchParties, watchparty, createWatchParty, setWatchParty }} >
            { props.children}
        </WatchPartyContext.Provider>
    )
}


// const createWatchParty = (name, scheduled_time, game, location, number_of_fans) => {

//     return fetch("http://localhost:8000/watchparties", {
//         method: "POST",
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("Token")}`,
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(
//             name,
//             scheduled_time,
//             game,
//             location,
//             number_of_fans,
//         )
//     })
//         .then(res => res.json())
// }
//     // console.log("create", setWatchParty)