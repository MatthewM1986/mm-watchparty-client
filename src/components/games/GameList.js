import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            <header className="game__header">
                <h1>Games</h1>
            </header>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__name">{game.name}</div>
                        <div className="game__sport_type">{game.sporttype.type}</div>
                        <div className="game__team_one">{game.team_one}</div>
                        <div className="game__team_two">{game.team_two}</div>
                        <div className="game__description">{game.description}</div>
                    </section>
                })
            }
        </article>
    )
}