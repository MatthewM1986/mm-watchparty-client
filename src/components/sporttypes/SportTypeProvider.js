
import React, { useState } from "react"

export const SportTypeContext = React.createContext()

export const SportTypeProvider = (props) => {
    const [sporttypes, setSportTypes] = useState([])

    const getSportTypes = () => {
        return fetch("http://localhost:8000/sporttypes", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(response => response.json())
            .then(setSportTypes)
    }

    return (
        <SportTypeContext.Provider value={{ sporttypes, getSportTypes }} >
            { props.children}
        </SportTypeContext.Provider>
    )
}