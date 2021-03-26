import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [games, setGames] = useState([])
    console.log("gameprovider", games)
    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Token")}`
            }
        })
            .then(response => response.json())
            .then(response => setGames(response))
    }

    return (
        <GameContext.Provider value={{ games, getGames }} >
            { props.children}
        </GameContext.Provider>
    )
}