function Header() {
    return (
        <header className="flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30">
            <div className="flex justify-between container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center">
                    <a href="javascript:void(0)" className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400">
                    <svg className="hi-outline hi-cube-transparent inline-block w-5 h-5 opacity-90" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
                    <span>Clime</span>
                    </a>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-5">
                    <nav className="hidden lg:flex lg:items-center lg:space-x-1 lg:space-x-2">
                    <a  href="" className="font-medium flex items-center space-x-2 px-4 py-2 rounded text-indigo-500 bg-indigo-100">
                        <svg className="hi-solid hi-home inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
                        <span>Home</span>
                    </a>
                    <a href="javascript:void(0)" className="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent">
                        <svg className="hi-solid hi-user-circle inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/></svg>
                        <span>Profile</span>
                    </a>
                    <a href="javascript:void(0)" className="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent">
                        <svg className="hi-solid hi-briefcase inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>
                        <span>Support</span>
                    </a>
                    <a href="javascript:void(0)" className="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent">
                        <svg className="hi-solid hi-cog inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
                        <span>Settings</span>
                    </a>
                    <a  href="javascript:void(0)" className="font-medium flex items-center space-x-2 px-4 py-2 rounded text-gray-500 hover:text-indigo-500 hover:bg-indigo-100 active:bg-transparent">
                        <svg className="hi-outline hi-lock-open inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>             <span>Logout</span>
                    </a>
                    </nav>
                    <div className="lg:hidden">
                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                        <svg className="hi-solid hi-menu-alt-4 inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/></svg>
                    </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;