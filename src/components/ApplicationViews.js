import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./games/GameList.js"
import { GameProvider } from "./games/GameProvider.js"
import { EventList } from "./watchparties/WatchPartyList.js"
import { EventProvider } from "./watchparties/WatchPartyProvider.js"

export const ApplicationViews = (props) => {
    return (
        <>
            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
                <GameProvider>
                    <Route exact path="games">
                        <GameList />
                    </Route>
                </GameProvider>

                <WatchPartyProvider>
                    <Route exact path="/watchparties">
                        <WatchPartyList />
                    </Route>
                </WatchPartyProvider>
            </main>
        </>
    )
}