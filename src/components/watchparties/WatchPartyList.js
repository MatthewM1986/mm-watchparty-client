import React, { useContext, useEffect } from "react"
import { WatchPartyContext } from "./WatchPartyProvider.js"

export const WatchPartyList = (props) => {
    const { watchparties, getWatchParties } = useContext(WatchPartyContext)

    useEffect(() => {
        getWatchParties()
    }, [])

    return (
        <article className="watchparties">
            <header className="watchparty__header">
                <h1>Watch Parties</h1>
            </header>
            {
                watchparties.map(wp => {
                    return <section key={`watchparty--${wp.id}`} className="watchparty">
                        <div className="watchparty__name">{wp.name}</div>
                        <div className="watchparty__scheduled_time">{wp.scheduled_time}</div>
                        <div className="watchparty__game">{wp.game.name}</div>
                        <div className="watchparty__location">{wp.location}</div>
                        <div className="watchparty__number_of_fans">{wp.number_of_fans}</div>
                    </section>
                })
            }
        </article >
    )
}