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

const Library = () => {
    return (<>
        <div className="bg-[#3A3C3C] w-full py-3">
            <div className="w-10/12 m-auto items-center">
                <div className>
                    <h2 className="text-2xl py-10">
                        <a href="/"
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
                        placeholder="Search for cdns"/>
                        <i
                            className="fas fa-search text-xl absolute right-5 top-[50%] text-gray-700"></i>
                </div>
            </div>
            <div className="flex justify-center mx-auto">
                <h3 className="text-lg text-[#8EA6A6] text-semibold py-2">Many
                    libraries found in 1ms.</h3>
            </div>
        </div>
        <div className="bg-[#454647] w-full h-screen pb-10">
            <div className="w-8/12 mx-auto pt-10">
                <div className="grid grid-cols-2 gap-6">
                    {
                        items.map((item, index) => {
                            return (<LibraryBox key={index} item={item} />)
                        })
                    }
                </div>
            </div>
        </div>
    </>);
}

const LibraryBox = ({ item }) => {

    const { name, version, description, tags } = item;

    return (<div className="bg-[#343535] h-32">
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
    </div>);
};



const container = document.getElementById('library');
const root = ReactDOM.createRoot(container);
root.render(<Library />)