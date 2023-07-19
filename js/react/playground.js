const { useRef, useState, useEffect, createContext, useContext } = React;

const libraryContext = createContext({});


const Header = () => {
    const { homeUrl } = useContext(libraryContext);

    const [isSplitNav, setIsSplitNav] = useState(false);

    const handleMobileNavBtn = () => {
        setIsSplitNav(!isSplitNav);
    }

    return (
        <div className="bg-[#343535] h-20 w-full sticky top-0 z-30">
            <div className="flex justify-between w-10/12 m-auto items-center">
                <div className="flex">
                    <a href={homeUrl}
                        className="text-5xl font-semibold text-slate-100 mt-1 cdnHome">
                        <i className="fa-solid fa-chevron-left text-gray-400"></i><span
                            className="text-red-400">cdn</span>s<i
                                className="fa-solid fa-chevron-right text-gray-400"></i></a>
                </div>
                <div className="flex">
                    <nav className="hidden xl:flex justify-center space-x-3 my-auto mt-4">
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">About</a>
                        <a href="./libraries.html"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-400">Libraries</a>
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">API</a>
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">GitHub</a>
                         <a href="./playground.html"
                            class="rounded-lg px-3 py-2 text-xl font-semibold text-slate-100">Playground</a>
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">
                            <div
                                className="flex flex justify-center items-center m-auto">
                                <div>Status</div>
                                <span className="relative flex h-3 w-3 mx-3">
                                    <span
                                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span
                                        className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                                </span>
                            </div>
                        </a>
                    </nav>
                    <nav className="flex xl:hidden justify-center space-x-3 my-auto mt-4">
                        <a href="#" className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100" onClick={handleMobileNavBtn}>
                            <i class="fa-solid fa-bars text-xl"></i>
                        </a>
                    </nav>
                    {
                        isSplitNav == true && <MobileNav />
                    }
                </div>
            </div>
        </div>
    );
}


const MobileNav = () => {
    return (
        <div className="xl:hidden justify-start flex flex-col absolute bg-gray-800 w-full h-auto right-0 top-20 transition ease-in-out delay-150">
            <a href="#"
                className="rounded-lg px-7 py-4 text-xl font-bold text-slate-100">About</a>
            <a href="./libraries.html"
                className="rounded-lg px-7 py-4 text-xl font-bold text-slate-400">Libraries</a>
            <a href="#"
                className="rounded-lg px-7 py-4 text-xl font-bold text-slate-100">API</a>
            <a href="#"
                className="rounded-lg px-7 py-4 text-xl font-bold text-slate-100">GitHub</a>
            <a href="./playground.html"
                            class="rounded-lg px-7 py-4 text-xl font-bold text-slate-100">Playground</a>
            <a href="#"
                className="rounded-lg px-7 py-4 text-xl font-bold text-slate-100">
                <div
                    className="flex flex justify-start items-start m-auto">
                    <div>Status</div>
                    <span className="relative flex h-3 w-3 mx-3 mt-2">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span
                            className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                    </span>
                </div>
            </a>
        </div>
    );
}

const App = () => {

    const [homeUrl, setHomeUrl] = useState('/');
    
    const handleHomePageRedirection = () => {
        const currentLocation = window.location.href;
        const pageIndex = currentLocation.indexOf('github');
        if (pageIndex !== -1) {
            setHomeUrl('/cdns/');
        } else {
            setHomeUrl('/');
        }
    };



    useEffect(() => {
        handleHomePageRedirection();
    }, []);

    const contextValues = { homeUrl};
    return (
        <libraryContext.Provider value={contextValues}>
            <Header />
        </libraryContext.Provider>
    )
};

const container = document.getElementById('playground');
const root = ReactDOM.createRoot(container);
root.render(<App />)