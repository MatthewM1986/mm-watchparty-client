import React, { useContext, useState, useEffect, useRef } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { WatchPartyContext } from "./WatchPartyProvider.js"
import { GameContext } from "../games/GameProvider.js"


export const WatchPartyForm = (props) => {
    console.log("props!!!", props)

    const { getSingleWatchParty, createWatchParty, watchparties, editWatchParty, watchparty, getWatchPartiesByUserId, setWatchParty } = useContext(WatchPartyContext)
    const { games, getGames } = useContext(GameContext)

    const [currentWatchParty, setCurrentWatchParty] = useState()
    console.log("current watch party", watchparties)
    console.log("watch party", watchparty)

    const name = useRef(null)
    const time = useRef(null)
    const location = useRef(null)
    const fans = useRef(null)


    const editMode = props.match.params.hasOwnProperty("id")
    console.log("edit mode", editMode)


    const handleInputChange = (event) => {

        const newWatchParty = Object.assign({}, watchparty)
        newWatchParty[event.target.name] = event.target.value
        setCurrentWatchParty(newWatchParty)
    }

    const getWatchPartyInEditMode = () => {
        if (editMode) {
            getSingleWatchParty(history.location.state.WatchParty.id)
        }
    }

    useEffect(() => {
        getGames()
            .then(getWatchPartiesByUserId)
            .then(getWatchPartyInEditMode())
    }, [])


    const history = useHistory()
    console.log("history", history)



    const game = games.find(g => g.id === history.gameId) || {}

    const createNewWatchParty = () => {
        if (editMode) {
            editWatchParty({
                id: parseInt(props.match.params.id),
                user_id: parseInt(localStorage.getItem("Token")),
                name: name.current.value,
                scheduled_time: time.current.value,
                game: game.id,
                location: location.current.value,
                number_of_fans: fans.current.value,
            })
                .then(() => history.push("/"))
        } else {
            createWatchParty({
                user_id: parseInt(localStorage.getItem("Token")),
                name: name.current.value,
                scheduled_time: time.current.value,
                game: game.id,
                location: location.current.value,
                number_of_fans: fans.current.value,
            })
                .then(() => history.push(`/`))
        }
    }

    if (!history.location.state) {
        return (
            <form className="watchpartyForm">
                <h2 className="watchpartyForm__title">Watch Party</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" ref={name}
                            required autoFocus className="form-control" placeholder="Name"
                            proptype="varchar"
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="time">Scheduled Time: </label>
                        <input type="text" id="time" ref={time}
                            required autoFocus className="form-control" placeholder="Time"
                            proptype="varchar"
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Location: </label>
                        <input type="text" id="location" ref={location}
                            required autoFocus className="form-control" placeholder="Location"
                            proptype="varchar"
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="fans">Max Fans Allowed: </label>
                        <input type="text" id="fans" ref={fans}
                            required autoFocus className="form-control" placeholder="Max Fans"
                            proptype="varchar"
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        createNewWatchParty()
                    }}
                >{editMode ? "Submit" : "Submit"}
                </button>
            </form >
        )
    } else if (watchparty.id === history.location.state.WatchParty.id) {
        return (
            <form className="watchpartyForm">
                <h2 className="watchpartyForm__title">Watch Party</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" ref={name}
                            required autoFocus className="form-control" placeholder="Name"
                            proptype="varchar"
                            defaultValue={watchparty.name}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="time">Scheduled Time: </label>
                        <input type="text" id="time" ref={time}
                            required autoFocus className="form-control" placeholder="Time"
                            proptype="varchar"
                            defaultValue={watchparty.scheduled_time}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="location">Location: </label>
                        <input type="text" id="location" ref={location}
                            required autoFocus className="form-control" placeholder="Location"
                            proptype="varchar"
                            defaultValue={watchparty.location}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="fans">Max Fans Allowed: </label>
                        <input type="text" id="fans" ref={fans}
                            required autoFocus className="form-control" placeholder="Max Fans"
                            proptype="varchar"
                            defaultValue={watchparty.number_of_fans}
                            onChange={handleInputChange}
                        />
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        createNewWatchParty()
                    }}>{editMode ? "Submit" : "Submit"}
                </button>
            </form >
        )
    } else {
        return <></>
    }

}
