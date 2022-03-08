import React from 'react'
import GameCard from './GameCard'



function GameGrid(props) {
    console.log("Gamegrid")
    console.log(props)
    return (
        <div className="grid grid-cols-5 gap-5 max-w-fit">
            <GameCard results = {props.results[0]}/>
        </div>
    )
}

export default GameGrid