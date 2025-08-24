import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function FilterSearch() {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`
        flex items-center relative border-2 border-main rounded-4xl bg-main overflow-hidden transition-all duration-500 ease-in-out
        ${expand ? "max-[1200px]:w-[500px]" : "max-[1200px]:w-[60px]"}
        min-[1200px]:w-full
      `}
    >
      {/* Search input & filter */}
      <div
        className={`
          flex items-center gap-3 bg-white py-2 px-4 flex-grow transition-all duration-500 ease-in-out
          ${expand ? "max-[1200px]:opacity-100 max-[1200px]:w-full" : "max-[1200px]:opacity-0 max-[1200px]:w-15"}
          min-[1200px]:opacity-100 min-[1200px]:w-full
        `}
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-auto outline-none bg-white"
        />
        <select className="appearance-none outline-none min-w-[120px]">
          <option value="">Hacking</option>
          <option value="">Web</option>
          <option value="">Mobile</option>
          <option value="">Network</option>
        </select>
      </div>

      {/* Toggle button (only visible on <1200px) */}
      <button
        type="button"
        onClick={() => setExpand(!expand)}
        className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-4 text-white text-3xl bg-main min-[1200px]:hidden"
      >
        <CiSearch />
      </button>
      <button type="submit" className="flex items-center justify-center px-4 text-white text-3xl bg-main max-[1200px]:hidden">
        <CiSearch />
      </button>
    </div>
  );
}

export default FilterSearch;
