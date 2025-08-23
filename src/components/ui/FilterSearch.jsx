import { useState } from "react";
import { CiSearch } from "react-icons/ci";
function FilterSearch() {
    const [expend, setExpend] = useState(false);
    return (
        <div className={` border-2 w-4xl
                rounded-4xl flex gap-3 border-main
                bg-main overflow-hidden items-center pr-3
                relative
                `} >
            <div className={`py-2 px-8 flex gap-3 w-full bg-white transform transition-transform duration-500 ease-in
                ${expend ? "max-[1200px]:translate-x-46" : "max-[1200px]:translate-x-0"}
                `}>
                <input type="text" placeholder="Search ...."
                    className="outline-0 flex-auto bg-white"
                />
                <select name="" id="" className="appearance-none w-1/6 outline-0">
                    <option value="">Hacking</option>
                    <option value="">Web</option>
                    <option value="">Mobile</option>
                    <option value="">Network</option>
                </select>
            </div>
            <button type="button" onClick={() => setExpend(!expend)} className=" text-white bg-main right-0 text-3xl absolute">
                <CiSearch />
            </button>
        </div>
    )
}

export default FilterSearch