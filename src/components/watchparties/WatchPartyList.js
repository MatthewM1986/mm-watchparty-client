import React, { useContext, useEffect, useHistory } from "react"
import { WatchPartyContext } from "./WatchPartyProvider.js"
import { GameContext } from "../games/GameProvider.js"

export const WatchPartyList = () => {
    const { watchparties, getWatchParties } = useContext(WatchPartyContext)
    const { games, getGames } = useContext(GameContext)

    const history = useHistory

    useEffect(() => {
        getWatchParties()
            .then(getGames)
    }, [])

    return (
        <article className="watchparties">
            <header className="watchparty__header">
                <h1>Watch Parties</h1>
            </header>
            {
                watchparties.map(wp => {
                    return <section key={wp.id} className="watchparty">
                        <div className="watchparty__name">{wp.name}</div>
                        <div className="watchparty__scheduled_time">{wp.scheduled_time}</div>
                        <div className="watchparty__game">{wp.game.name}</div>
                        <div className="watchparty__location">{wp.location}</div>
                        <div className="watchparty__number_of_fans">{wp.number_of_fans}</div>
                        <button className="join__watchparty"
                            onClick={() => {
                                history.push("/")
                            }}
                        >Join Watch Party</button>
                    </section>
                })
            }
        </article >
    )
}