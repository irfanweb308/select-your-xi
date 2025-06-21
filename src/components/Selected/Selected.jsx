
import { MdDeleteForever } from "react-icons/md";

const Selected = ({ playersChosen, handleAvailableClick, handleRemove }) => {





    return (
        <div>
            {
                playersChosen.map((player, index) => (

                    <div className='flex justify-between items-center border border-gray-300 shadow-lg pl-4 pb-4 pt-4 rounded-lg mb-4'>
                        <div key={index} className="flex items-center gap-5 ">
                            <img className="max-w-20 h-20 rounded-xl" src={player.img} alt="" />

                            <div>
                                <h2 className="text-2xl font-semibold">{player.name}</h2>
                                <p className="text-base text-gray-400">{player.type}</p>
                            </div>
                        </div>
                        <button onClick={() => handleRemove(player.id, player.price)} className='pr-5 text-2xl mr-5 btn btn-soft btn-error'>
                            <MdDeleteForever ></MdDeleteForever>
                        </button>

                    </div>


                ))

            }
            <div className="flex mb-7">

                <div className='border border-amber-400 p-1 rounded-lg'>
                    <button onClick={handleAvailableClick} className='btn btn-warning text-base font-bold'>Add more</button>
                </div>
            </div>
        </div>
    );
};

export default Selected;
