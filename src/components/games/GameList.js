import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
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
                <h2 style={{ color: 'white' }}>Games</h2>
            </header>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            {
                games.map(game => {
                    return <section key={game.id} className="game"
                        className="card text-white bg-primary mb-3" style={{ maxWidth: "40rem" }}>
                        <h4 className="game__name">{game.name}</h4>
                        <h5 className="game__sport_type">Sport:&nbsp;&nbsp;&nbsp;{game.sport_type.type}</h5>
                        <h5 className="game__team_one">Team:&nbsp;&nbsp;&nbsp;{game.team_one}</h5>
                        <h5 className="game__team_two">Team:&nbsp;&nbsp;&nbsp;{game.team_two}</h5>
                        <h5 className="game__description">Description:&nbsp;&nbsp;&nbsp;{game.description}</h5>

                        <button className="btn btn-secondary btn-sm">
                            <Link className="btn btn-secondary"
                                to={{
                                    pathname: `/watchparties/${game.id}/create`,
                                    state: { game: game.id },

                                }}>
                                Create </Link>
                        </button>
                    </section >
                })
            }
        </article >
    )
}