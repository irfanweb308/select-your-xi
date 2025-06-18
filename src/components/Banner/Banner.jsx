import Image from '../../assets/images/banner-main.png'

const Banner = ({pass}) => {
    const value = 600000;
    return (

        <div className="w-full bg-gradient-to-r from-red-400 to-purple-500 text-center flex flex-col items-center gap-4 py-16 rounded-xl mb-9 ">
            <img className='max-w-60' src={Image} alt="" />
            <h1 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-gray-200 text-2xl font-medium'>Beyond Boundaries Beyond Limits</p>
            <div>
                <div className='border border-amber-400 p-1 rounded-lg'>
                    <button onClick={()=>pass(value)} className='btn btn-warning'>Claim Free Credit</button>
                </div>
            </div>

            

        </div>

    );
};

export default Banner;