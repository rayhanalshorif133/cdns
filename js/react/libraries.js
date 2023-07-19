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
            <div className="flex justify-between w-11/12 m-auto items-center">
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



const BootcampAndSearch = () => {

    const { inputRef, setSearchValue, homeUrl, libraries, fetchTime } = useContext(libraryContext);


    const handleInput = () => {
        setSearchValue(inputRef.current.value);
    }


    return (
        <div className="bg-[#3A3C3C] w-full py-3">
            <div className="w-10/12 m-auto items-center">
                <div>
                    <h2 className="text-2xl py-10">
                        <a href={homeUrl}
                            className="text-[#D9643A] hover:text-[#BC4C2B] font-normal">Home</a>
                        <span className="text-white font-semibold text-3xl mx-2">/</span>
                        <a href="/libraries.html"
                            className="text-[#D9643A] hover:text-[#BC4C2B] font-normal">Libraries</a>
                    </h2>
                </div>
            </div>
            <div className="flex justify-center mx-auto mt-10 w-full">
                <div className="relative w-6/12 pt-10 pb-4 my-auto">
                    <input
                        className="border-2 border-gray-300 bg-white h-14 px-5 pr-16 w-full rounded-lg text-xl focus:outline-none placeholder:text-gray-700 placeholder:font-normal"
                        type="search" name="search"
                        placeholder="Search for cdns" ref={inputRef} onChange={handleInput} />
                    <i
                        className="fas fa-search text-xl absolute right-5 top-[50%] text-gray-700"></i>
                </div>
            </div>
            <div className="flex justify-center mx-auto">
                <h3 className="text-lg text-[#8EA6A6] text-semibold py-2">
                    {libraries.length > 0 ? <span className="text-cdnColor font-semibold">{libraries.length}</span> : "Many"} libraries found in {fetchTime}{
                        fetchTime > 1 ? "s" : "ms"
                    }.</h3>
            </div>
        </div>);
}

const Library = () => {

    const { libraries } = useContext(libraryContext);

    return (<div className="bg-[#454647] w-full h-auto pb-10">
        <div className="w-11/12 xl:w-10/12 w-7/12 mx-auto pt-6 xl:pt-10">
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 3xl:gap-6">
                {
                    libraries.length > 0 && libraries.map((item, index) => {
                        return (<LibraryBox key={index} item={item} />)
                    })
                }
            </div>
        </div>
    </div>)
}

const LibraryBox = ({ item }) => {

    const { name, version, description, tags, url } = item;

    const { tooltipMsg } = useContext(libraryContext);

    // get url extension
    const urlExtension = url.split('.').pop();
    var urlWithTags = "";
    if (urlExtension === 'css') {
        urlWithTags = `<link href=${url} rel="stylesheet">`;
    } else {
        urlWithTags = `<script src=${url}></script>`;
    }
    return (
        <div className="bg-[#343535] h-32 md:h-auto md:py-2 xl:py-2 md:w-full 2xl:w-full">
            <div className="flex justify-between px-5 py-3">
                <div className="text-cdnColor">
                    <span className="text-2xl font-semibold">{name}</span>
                    <span className="text-base"> @{version}</span>
                </div>
                <div className="text-xl font-semibold space-x-1 pr-2 flex">
                    <Tooltip message={tooltipMsg}>
                        <i className="fa-solid fa-link cursor-pointer text-white hover:text-gray-400 px-1 copyUrlBtn" data-clipboard-text={url}></i>
                    </Tooltip>
                    <Tooltip message={tooltipMsg}>
                        <i
                            className="fa-solid fa-code cursor-pointer text-white hover:text-gray-400 px-1 copyUrlBtn" data-clipboard-text={urlWithTags}></i>
                    </Tooltip>
                    <Tooltip message={'See_more'}>
                        <i
                            className="fa-solid fa-eye cursor-pointer text-white hover:text-gray-400 px-1"></i>
                    </Tooltip>
                </div>
            </div>
            <div className="px-5">
                <h2 className="text-base text-white font-semibold">{description}</h2>
                <h3 className="text-sm text-white font-base mt-3 tags">
                    Tags:
                    {
                        tags.map((tag, index) => {
                            return (
                                <span key={index} className="ml-2">{tag}
                                    {
                                        index < tags.length - 1 ? ',' : ''
                                    }
                                </span>
                            )
                        })
                    }
                </h3>
            </div>
        </div>
    );
};


function Tooltip({ message, children }) {
    return (
        <div className="group relative flex">
            {children}
            <span className="absolute top-10 scale-0 w-50 transition-all rounded bg-gray-800 p-2 text-sm text-white group-hover:scale-100">{message}</span>
        </div>
    )
}



const App = () => {


    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState(null);
    const [tooltipMsg, setTooltipMsg] = useState('Copy_URL');
    const [homeUrl, setHomeUrl] = useState('/');
    const [libraries, setLibraries] = useState([]);
    const [fetchTime, setFetchTime] = useState(Date.now());

    const fetchData = async () => {
        await axios.get('https://cdns-ad86e-default-rtdb.firebaseio.com/libraries.json').then((res) => {
            setLibraries(res.data);
            const secSpent = (Date.now() - fetchTime) / 1000;
            setFetchTime(secSpent);
        });
    }

    const handleSearchValue = async () => {
        await axios.get('https://cdns-ad86e-default-rtdb.firebaseio.com/libraries.json').then((res) => {
            const libraries = res.data;
            const filteredLibraries = libraries.filter((item) => {
                return item.tags.includes(searchValue);
            });
            if (searchValue === '') {
                fetchData();
            }
            setLibraries(filteredLibraries);
        });

    }
    useEffect(() => {
        handleSearchValue();
    }, [searchValue]);

    useEffect(() => {
        fetchData();
    }, []);

    const clipboard = new ClipboardJS('.copyUrlBtn');

    clipboard.on('success', function (e) {
        setTooltipMsg('Copied!');
        setTimeout(() => {
            setTooltipMsg('Copy_URL');
        }, 1000);
        e.clearSelection();
    });


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

    const contextValues = { inputRef, searchValue, setSearchValue, homeUrl, tooltipMsg, setTooltipMsg, libraries, fetchTime };

    return (<>
        <libraryContext.Provider value={contextValues}>
            <Header />
            <BootcampAndSearch />
            <Library />
        </libraryContext.Provider>
    </>);
}


const container = document.getElementById('library');
const root = ReactDOM.createRoot(container);
root.render(<App />)