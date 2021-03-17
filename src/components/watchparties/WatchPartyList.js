import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"

export const WatchPartyList = (props) => {
    const { watchparties, getWatchParties } = useContext(WatchPartyContext)

    useEffect(() => {
        getWatchParties()
    }, [])



    return (
        <article className="watchparty">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <div className="registration__game">{event.game.title}</div>
                        <div>{event.description}</div>
                        <div>
                            {
                                new Date(date).toLocaleDateString("en-US",
                                    {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })
                            }
                                @ {event.time}
                        </div>
                    </section>
                })
            }
        </article >
    )
}