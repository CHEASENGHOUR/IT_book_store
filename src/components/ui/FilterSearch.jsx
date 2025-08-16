import { CiSearch } from "react-icons/ci";
function FilterSearch() {
    return (
        <div className=" border-6 py-2 px-8 w-3xl
                rounded-2xl flex gap-2.5 border-main
                "  >
            <input type="text" placeholder="Search ...."
                className="outline-0 flex-auto"
            />
            <select name="" id="" className="appearance-none flex-none ">
                <option value="">Hacking</option>
                <option value="">Web</option>
                <option value="">Mobile</option>
                <option value="">Network</option>
            </select>
            <button type="button" className="flex-none">
                <CiSearch/>
            </button>
        </div>
    )
}

export default FilterSearch