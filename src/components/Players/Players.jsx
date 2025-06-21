import { useEffect, useState } from "react";
import Player from "../Player/Player";
import Selected from "../Selected/Selected";


const Players = ({ cp, view, handleAvailableClick, handleSelectedClick, playersChosen,handleRemove }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

    }, [])
    return (
        <div>
            <div className="flex justify-between mb-9">
                <h1 className="text-2xl font-bold">{view === "available" ? "Available players" : `Selected players (${playersChosen.length}/6)`}</h1>
                <div className="text-base font-bold">
                    <button onClick={handleAvailableClick} className={`btn ${view === "available" ? "btn-primary" : "btn-outline"}`}>
                        Available
                    </button>

                    <button onClick={handleSelectedClick} className={`btn ${view === "selected" ? "btn-primary" : "btn-outline"}`}>
                        Selected
                    </button>
                </div>
            </div>

            {view === "available" && (
                <div className="grid md:grid-cols-3 gap-5">
                    {players.map((pl) => (
                        <Player key={pl.id} player={pl} cp={cp} />
                    ))}
                </div>
            )}
            {view === "selected" && (
                <Selected handleAvailableClick={handleAvailableClick} playersChosen={playersChosen} handleRemove={handleRemove}></Selected>
            )}



        </div>
    )
};

export default Players;