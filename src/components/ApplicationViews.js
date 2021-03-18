import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./games/GameList.js"
import { GameProvider } from "./games/GameProvider.js"
import { WatchPartyList } from "./watchparties/WatchPartyList.js"
import { WatchPartyProvider } from "./watchparties/WatchPartyProvider.js"
import { SportTypeProvider } from "./sporttypes/SportTypeProvider.js"

export const ApplicationViews = (props) => {
    return (
        <>
            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
                <SportTypeProvider>
                    <GameProvider>
                        <Route exact path="/games">
                            <GameList />
                        </Route>
                    </GameProvider>
                </SportTypeProvider>

                <SportTypeProvider>
                    <GameProvider>
                        <WatchPartyProvider>
                            <Route exact path="/watchparties">
                                <WatchPartyList />
                            </Route>
                        </WatchPartyProvider>
                    </GameProvider>
                </SportTypeProvider>
            </main>
        </>
    )
}