import { IoPerson } from "react-icons/io5";
import { IoFlagSharp } from "react-icons/io5";

const Player = ({ player, cp }) => {
    const { img, name, country, position, type, price } = player


    return (

        <div className="card bg-base-100 shadow-lg border border-gray-300 ">
            <figure className="px-10 pt-10 ">
                <img
                    src={img}
                    alt=" "
                    className="rounded-xl h-60 " />
            </figure>
            <div className="card-body pt-4">
                <h2 className="card-title text-2xl font-bold justify-center"><IoPerson />{name}</h2>

                <div className="flex justify-between gap-4 my-2">
                    <span className="font-medium flex items-center gap-1"><IoFlagSharp></IoFlagSharp>{country}</span>
                    <span className="badge badge-primary">{position}</span>
                </div>
                <hr className="text-gray-400" />

                <div className=" text-center">
                    <h3 className="text-sm font-semibold text-gray-500">Specialty</h3>
                    <div className="flex justify-center  mt-1">
                        <span className="font-medium">{type}</span>

                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 mt-6">
                    <span className="text-lg font-bold">Price: ${price}</span>
                    <button onClick={() => cp(player)} className="btn btn-active btn-success text-white font-extrabold">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;