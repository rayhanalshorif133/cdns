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
            <div className="flex items-center justify-between w-11/12 m-auto">
                <div className="flex">
                    <a href={homeUrl}
                        className="mt-1 text-5xl font-semibold text-slate-100 cdnHome">
                        <i className="text-gray-400 fa-solid fa-chevron-left"></i><span
                            className="text-red-400">cdn</span>s<i
                                className="text-gray-400 fa-solid fa-chevron-right"></i></a>
                </div>
                <div className="flex">
                    <nav className="justify-center hidden my-auto mt-4 space-x-3 xl:flex">
                        <a href="#"
                            className="hidden px-3 py-2 text-xl font-bold rounded-lg text-slate-100">About</a>
                        <a href="./libraries.html"
                            className="px-3 py-2 text-xl font-bold rounded-lg text-slate-400">Libraries</a>
                        <a href="#"
                            className="hidden px-3 py-2 text-xl font-bold rounded-lg text-slate-100">API</a>
                        <a href="#"
                            className="hidden px-3 py-2 text-xl font-bold rounded-lg text-slate-100">GitHub</a>
                         <a href="./playground.html"
                            class="rounded-lg px-3 py-2 text-xl font-semibold text-slate-100">Playground</a>
                        <a href="#"
                            className="hidden px-3 py-2 text-xl font-bold rounded-lg text-slate-100">
                            <div
                                className="flex items-center justify-center m-auto">
                                <div>Status</div>
                                <span className="relative flex w-3 h-3 mx-3">
                                    <span
                                        className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
                                    <span
                                        className="relative inline-flex w-3 h-3 bg-green-600 rounded-full"></span>
                                </span>
                            </div>
                        </a>
                    </nav>
                    <nav className="flex justify-center my-auto mt-4 space-x-3 xl:hidden">
                        <a href="#" className="px-3 py-2 text-xl font-bold rounded-lg text-slate-100" onClick={handleMobileNavBtn}>
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
        <div className="absolute right-0 flex flex-col justify-start w-full h-auto transition ease-in-out delay-150 bg-gray-800 xl:hidden top-20">
            <a href="#"
                className="hidden py-4 text-xl font-bold rounded-lg px-7 text-slate-100">About</a>
            <a href="./libraries.html"
                className="py-4 text-xl font-bold rounded-lg px-7 text-slate-400">Libraries</a>
            <a href="#"
                className="hidden py-4 text-xl font-bold rounded-lg px-7 text-slate-100">API</a>
            <a href="#"
                className="hidden py-4 text-xl font-bold rounded-lg px-7 text-slate-100">GitHub</a>
            <a href="./playground.html"
                            class="rounded-lg px-7 py-4 text-xl font-bold text-slate-100">Playground</a>
            <a href="#"
                className="py-4 text-xl font-bold rounded-lg px-7 text-slate-100">
                <div
                    className="flex items-start justify-start m-auto">
                    <div>Status</div>
                    <span className="relative flex w-3 h-3 mx-3 mt-2">
                        <span
                            className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
                        <span
                            className="relative inline-flex w-3 h-3 bg-green-600 rounded-full"></span>
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
            <div className="items-center w-10/12 m-auto">
                <div>
                    <h2 className="py-10 text-2xl">
                        <a href={homeUrl}
                            className="text-[#D9643A] hover:text-[#BC4C2B] font-normal">Home</a>
                        <span className="mx-2 text-3xl font-semibold text-white">/</span>
                        <a href="/libraries.html"
                            className="text-[#D9643A] hover:text-[#BC4C2B] font-normal">Libraries</a>
                    </h2>
                </div>
            </div>
            <div className="flex justify-center w-full mx-auto mt-10">
                <div className="relative w-6/12 pt-10 pb-4 my-auto">
                    <input
                        className="w-full px-5 pr-16 text-xl bg-white border-2 border-gray-300 rounded-lg h-14 focus:outline-none placeholder:text-gray-700 placeholder:font-normal"
                        type="search" name="search"
                        placeholder="Search for cdns" ref={inputRef} onChange={handleInput} />
                    <i
                        className="fas fa-search text-xl absolute right-5 top-[50%] text-gray-700"></i>
                </div>
            </div>
            <div className="flex justify-center mx-auto">
                <h3 className="text-lg text-[#8EA6A6] text-semibold py-2">
                    {libraries.length > 0 ? <span className="font-semibold text-cdnColor">{libraries.length}</span> : "Many"} libraries found in {fetchTime}{
                        fetchTime > 1 ? "s" : "ms"
                    }.</h3>
            </div>
        </div>);
}

const Library = () => {

    const { libraries } = useContext(libraryContext);


    return (<div className={`bg-[#454647] w-full ${libraries.length < 6? 'h-screen': 'h-auto'} pb-10`}>
        <div className="w-7/12 w-11/12 pt-6 mx-auto xl:w-10/12 xl:pt-10">
            <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2 3xl:gap-6">
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
                <div className="flex pr-2 space-x-1 text-xl font-semibold">
                    <Tooltip message={tooltipMsg}>
                        <i className="px-1 text-white cursor-pointer fa-solid fa-link hover:text-gray-400 copyUrlBtn" data-clipboard-text={url}></i>
                    </Tooltip>
                    <Tooltip message={'Copy_Script_Tag'}>
                        <i
                            className="px-1 text-white cursor-pointer fa-solid fa-code hover:text-gray-400 copyUrlBtn" data-clipboard-text={urlWithTags}></i>
                    </Tooltip>
                    <Tooltip message={'See_more'}>
                        <i
                            className="px-1 text-white cursor-pointer fa-solid fa-eye hover:text-gray-400"></i>
                    </Tooltip>
                </div>
            </div>
            <div className="px-5">
                <h2 className="text-base font-semibold text-white">{description}</h2>
                <h3 className="mt-3 text-sm text-white font-base tags">
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
        <div className="relative flex group">
            {children}
            <span className="absolute p-2 text-sm text-white transition-all scale-0 bg-gray-800 rounded top-10 w-50 group-hover:scale-100">{message}</span>
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