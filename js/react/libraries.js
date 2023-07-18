const { useRef,useState, useEffect, createContext,useContext } = React;

const libraryContext = createContext({});

const items = [
    {
        id: 1,
        name: 'tailwindcss',
        version: '3.3.3',
        description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
        tags: ['tailwindcss', 'css']
    },
    {
        id: 2,
        name: 'tailwindcss-paddings',
        version: '3.3.3',
        description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
        tags: ['tailwindcss', 'css', 'paddings']
    },
    {
        id: 3,
        name: 'tailwindcss-margins',
        version: '3.3.3',
        description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
        tags: ['tailwindcss', 'css', 'margins']
    },
];



const Header = () => {
    const {homeUrl} = useContext(libraryContext);
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
                    <nav className="flex justify-center space-x-3 my-auto mt-4">
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">About</a>
                        <a href="./libraries.html"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">Libraries</a>
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">API</a>
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-xl font-bold text-slate-100">GitHub</a>
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
                </div>
            </div>
        </div>
    );
}



const BootcampAndSearch = () => {

    const { inputRef ,setSearchValue,homeUrl} = useContext(libraryContext);
   

    const handleInput = () => {
        setSearchValue(inputRef.current.value);
    }


    return (
        <div className="bg-[#3A3C3C] w-full py-3">
            <div className="w-10/12 m-auto items-center">
                <div>
                    <h2 className="text-2xl py-10">
                        <a href={homeUrl}
                            className="text-[#D9643A] hover:text-[#BC4C2B] font-normal cdnHome">Home</a>
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
                <h3 className="text-lg text-[#8EA6A6] text-semibold py-2">Many
                    libraries found in 1ms.</h3>
            </div>
        </div>);
}

const Library = () => {
    return (<div className="bg-[#454647] w-full h-screen pb-10">
        <div className="w-8/12 mx-auto pt-10">
            <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
                {
                    items.map((item, index) => {
                        return (<LibraryBox key={index} item={item} />)
                    })
                }
            </div>
        </div>
    </div>)
}

const LibraryBox = ({ item }) => {

    const { name, version, description, tags } = item;

    const {searchValue} = useContext(libraryContext);
    const [isSearch,setIsSearch] = useState(true);

    useEffect(() => {
        searchValue == '' && setIsSearch(true);
        if (searchValue) {
            tags.map((tag) => {
                if (tag.includes(searchValue)) {
                    setIsSearch(true);
                } else {
                    setIsSearch(false);
                }
            })
        }
    }, [searchValue]);

        

    return (
        <div className={`bg-[#343535] h-32 ${isSearch == false && 'hidden'}`}>
            <div className="flex justify-between px-5 py-3">
                <div className="text-cdnColor">
                    <span className="text-2xl font-semibold">{name}</span>
                    <span className="text-base"> @{version}</span>
                </div>
                <div className="text-xl font-semibold space-x-1 pr-2">
                    <i
                        className="fa-solid fa-link cursor-pointer text-white hover:text-gray-400 px-1"></i>
                    <i
                        className="fa-solid fa-code cursor-pointer text-white hover:text-gray-400 px-1"></i>
                    <i
                        className="fa-solid fa-eye cursor-pointer text-white hover:text-gray-400 px-1"></i>
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

const App = () => {


    const inputRef = useRef(null);
    const [searchValue,setSearchValue] = useState(null);
    const [homeUrl,setHomeUrl] = useState('/');

    
    const handleHomePageRedirection = () => {
        const currentLocation = window.location.href;
        const pageIndex = currentLocation.indexOf('github');
        if(pageIndex !== -1) {
            setHomeUrl('/cdns/');
        }else{
            setHomeUrl('/');
        }
    };

    useEffect(() => {
        handleHomePageRedirection();
    },[]);

    const contextValues =  {inputRef, searchValue, setSearchValue,homeUrl};

    return (<>
        <libraryContext.Provider value={contextValues}>
            <Header />
            <BootcampAndSearch/>
            <Library />
        </libraryContext.Provider>
    </>);
}


const container = document.getElementById('library');
const root = ReactDOM.createRoot(container);
root.render(<App />)