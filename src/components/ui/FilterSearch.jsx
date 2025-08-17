import { CiSearch } from "react-icons/ci";
function FilterSearch() {
    return (
        <div className=" border-2 w-4xl
                rounded-4xl flex gap-3 border-main
                bg-main overflow-hidden items-center pr-3
                "  >
            <div className="py-2 px-8 flex gap-3 w-full bg-white">
                <input type="text" placeholder="Search ...."
                    className="outline-0 flex-auto"
                />
                <select name="" id="" className="appearance-none w-1/6 outline-0">
                    <option value="">Hacking</option>
                    <option value="">Web</option>
                    <option value="">Mobile</option>
                    <option value="">Network</option>
                </select>
            </div>
            <button type="button" className=" text-white text-3xl">
                <CiSearch />
            </button>
        </div>
    )
}

export default FilterSearch