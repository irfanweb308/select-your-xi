import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = ({cp}) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

    }, [])
    return (
        <div>
            <div className="flex justify-between mb-9">
                <h1 className="text-2xl font-bold">Available Players</h1>
                <div className="text-base font-bold">
                    <button className="btn">Available</button>
                    <button className="btn">Selected</button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">

                {
                    players.map(pl => <Player key={pl.id} player={pl} cp={cp}></Player>)
                }
            </div>
        </div>
    )
};

export default Players;