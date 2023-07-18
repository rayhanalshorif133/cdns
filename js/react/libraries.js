const LibraryBox = () => {
    return (<>
      <div class="grid grid-cols-2 gap-6">
        <LibraryBoxItem />
        <LibraryBoxItem />
        <LibraryBoxItem />
      </div>
    </>);
  }
  
  const LibraryBoxItem = () => {
    return (<div class="bg-[#343535] h-32">
      <div class="flex justify-between px-5 py-3">
        <div class="text-cdnColor">
          <span class="text-2xl font-semibold">tailwindcss</span>
          <span class="text-base">@ 3.3.3</span>
        </div>
        <div class="text-xl font-semibold space-x-1 pr-2">
          <i
            class="fa-solid fa-link cursor-pointer text-white hover:text-gray-400"></i>
          <i
            class="fa-solid fa-code cursor-pointer text-white hover:text-gray-400"></i>
          <i
            class="fa-solid fa-eye cursor-pointer text-white hover:text-gray-400"></i>
        </div>
      </div>
      <div class="px-5">
        <h2 class="text-base text-white font-semibold">A
          utility-first CSS framework for rapidly building
          custom user interfaces.</h2>
        <h3 class="text-sm text-white font-normal mt-3 tags">
          Tags: <span class="ml-2">tailwindcss</span>,<span>css</span></h3>
      </div>
    </div>);
  };
  
  
  
  const container = document.getElementById('library-box');
  const root = ReactDOM.createRoot(container);
  root.render(<LibraryBox />)