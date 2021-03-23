import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider.js"
import { SportTypeContext } from "../sporttypes/SportTypeProvider.js"

export const GameList = () => {
    const { games, getGames } = useContext(GameContext)
    const { sporttypes, getSportTypes } = useContext(SportTypeContext)

    const history = useHistory()

    useEffect(() => {
        getGames()
            .then(getSportTypes)
    }, [])

    return (
        <article className="games">
            <header className="game__header">
                <h1>Games</h1>
            </header>
            {
                games.map(game => {
                    return <section key={game.id} className="game">
                        <div className="game__name">{game.name}</div>
                        <div className="game__sport_type">{game.sport_type.type}</div>
                        <div className="game__team_one">{game.team_one}</div>
                        <div className="game__team_two">{game.team_two}</div>
                        <div className="game__description">{game.description}</div>
                        <button className="create__watchparty"
                            onClick={() => {
                                history.push("/watchparties/create")
                            }}
                        >Create Watch Party</button>
                        {/* <button className="search__watchparty"
                            onClick={() => {
                                // history.push("/watchparties/game_id")
                            }}
                        >Search Watch Parties</button> */}
                    </section>
                })
            }
        </article>
    )
}