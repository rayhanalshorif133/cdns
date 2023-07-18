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
];

const LibraryBox = () => {
    return (<>
        <div className="bg-[#454647] w-full h-screen pb-10">
            <div className="w-8/12 mx-auto pt-10">
                <div className="grid grid-cols-2 gap-6">
                    {
                        items.map((item, index) => {
                            return (<LibraryBoxItem key={index} item={item} />)
                        })
                    }
                </div>
            </div>
        </div>
    </>);
}

const LibraryBoxItem = ({ item }) => {

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



const container = document.getElementById('library-box');
const root = ReactDOM.createRoot(container);
root.render(<LibraryBox />)