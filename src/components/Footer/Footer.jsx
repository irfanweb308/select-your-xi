import Img from '../../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <div className="relative z-20 p-3 rounded-lg border border-gray-300 mt-48 max-w-[1320px] mx-auto">
                <div className="rounded-lg bg-gradient-to-r from-blue-100 via-white to-orange-100 flex flex-col text-center py-20 gap-2.5">

                    <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <p className="text-2xl font-medium text-gray-400">Get the latest updates and news right in your inbox!</p>

                    <div>
                        <input type="text" placeholder="Enter your email" className="border border-gray-400 pl-7 py-3.5 rounded-lg mr-3" />
                        <button className="text-base font-bold btn bg-blue-400   pl-7 py-3.5 pr-7">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='relative z-10 bg-[#06091A] -mt-24 pt-32' >
                <div className='flex justify-center'>
                    <img src={Img} alt="" className='max-w-36' />
                </div>
                <footer className="footer sm:footer-horizontal  text-white p-10 max-w-[1320px] mx-auto">

                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <p className='w-2xs'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <p className='mb-3'>Subscribe to our newsletter for the <br /> latest updates.</p>
                        <fieldset className="w-80">

                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item text-black" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>

                </footer>
                <hr className='text-white' />
                <aside className='flex justify-center'>
                    <p className='text-white py-8'>Copyright © {new Date().getFullYear()} - All Right Reserved</p>
                </aside>

            </div>
        </div>
    );
};

export default Footer;