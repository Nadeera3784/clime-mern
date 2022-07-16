import { Link } from 'react-router-dom';

import HeroImage from '../../assets/images/home-image.jfif'

function Home() {

    return (
        <div className="bg-white overflow-hidden">
            <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                <div className="flex flex-col md:flex-row md:items-center space-y-16 md:space-y-0 md:space-x-28">
                    <div className="relative">
                        <div className="absolute pattern-dots-lg text-gray-200 top-0 left-0 w-32 h-48 md:h-72 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
                        <div className="absolute pattern-dots-lg text-gray-200 bottom-0 right-0 w-32 h-48 md:h-72 transform translate-y-12 translate-x-16 rotate-3"></div>
                        <div className="absolute rounded-3xl top-0 right-0 w-32 h-32 bg-green-200 bg-opacity-50 -mt-10 -mr-10 transform -rotate-6"></div>
                        <div className="absolute rounded-3xl bottom-0 left-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-6"></div>
                        <img src={HeroImage} alt="Hero Image" className="relative rounded-lg mx-auto shadow-lg" />
                    </div>
                    <div className="space-y-10">
                        <div>
                            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">9,500+ Customers</div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Clime:Weather Radar Live</h2>
                            <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                            Real-time radar images, severe weather alerts, accurate weather forecasts and much more - precise & timely to help keep you safe!
                            </h3>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2">
                            <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                                <span>My Account</span>
                            </a>

                            <Link to="/login" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                                <span>Log in</span>
                            </Link>
                            <Link to="/register" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                                <span>Register</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;