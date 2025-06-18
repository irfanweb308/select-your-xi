
import cricketLogo from '../../assets/images/logo.png'
const Header = ({ coins }) => {


    return (


        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <nav className="max-w-[1320px] mx-auto flex items-center justify-between px-8 py-4">

                <div className="flex items-center">
                    <img src={cricketLogo} alt="Cricket Logo" className="h-12" />
                </div>


                <div className="flex space-x-8 font-medium">
                    <button className='btn btn-soft btn-info text-black'><a href="#" className="hover:text-black">Home</a></button>
                    <button className='btn btn-soft btn-info text-black'><a href="#" className="hover:text-black">Fixture</a></button>
                    <button className='btn btn-soft btn-info text-black'><a href="#" className="hover:text-black">Teams</a></button>
                    <button className='btn btn-soft btn-info text-black'><a href="#" className="hover:text-black">Schedules</a></button>
                </div>

                
                <div className="flex items-center border px-4 py-1 rounded-md font-semibold text-black">
                    <span>${coins}</span>
                    <span className="ml-1">🪙</span>
                </div>  
            </nav>
        </header>
    );
};

export default Header;
