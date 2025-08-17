import { BiSolidPhone } from "react-icons/bi"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { TbMinusVertical } from "react-icons/tb";
import Logo from "./Logo";
import FilterSearch from "./FilterSearch";
import { useState } from "react";
import AccDropdown from "./AccDropdown";
import CartSidebar from "./CartSidebar";
function Navigations() {
    const [drop, setDrop] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const miniLinks = [
        {
            icon: <BiSolidPhone />,
            text: "+855 68 625 866"
        },
        {
            icon: <HiOutlineShoppingBag />,
            text: "កន្រក់សៀវភៅអ្នក"
        },
        {
            icon: <GoPerson />,
            text: "គណនីខ្ញុំ"
        },
    ];
    const handleDropdown = () => {
        setDrop(!drop)
    }
    const handleSidebar = (value) => {
        setSidebar(value);
    }
    return (
        <div className=" w-full">
            <div className="flex justify-between px-25 py-1.5 border-b border-b-gray-300">
                <p>សូមស្វារគម៍មកកាន់​ គេហទំព័រលក់សៀវភៅ IT</p>
                <div className="flex gap-2">
                    {
                        miniLinks.map((item, index) => (
                            <p key={index} className="flex items-center gap-1.5">
                                {item.icon} {item.text}
                                {
                                    index < miniLinks.length - 1 && <span className="mx-1 text-gray-400">
                                        <TbMinusVertical />
                                    </span>
                                }
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="px-25 py-6 flex items-center gap-5">
                <Logo />
                <FilterSearch />
                <div className="relative inline-block">
                    <div
                        onClick={handleDropdown}
                        className="h-full bg-amber-200 p-3 text-md cursor-pointer"
                    >
                        <GoPerson />
                    </div>

                    <div
                        className={`absolute top-full 
                                    left-[-50px] origin-top transition-all 
                                    duration-500 ease-in-out border-t-2 border-t-main
                                    shadow-lg/10 rounded-b-lg
                            ${drop
                                ? "opacity-100 scale-y-100 visible"
                                : "opacity-0 scale-y-0 invisible"
                            }`}
                    >
                        <AccDropdown/>
                    </div>
                </div>
                <div onClick={() => setSidebar(true)}
                    className="
                    flex bg-amber-400 w-1/6 items-center 
                    gap-2 px-2 py-3 text-md
                    ">
                    <HiOutlineShoppingBag />
                    <p>0 ៛</p>
                </div>
                {
                    sidebar ? <CartSidebar Open={sidebar} Close={() => setSidebar(false) }/> : ""
                }
            </div>

        </div>
    )
}

export default Navigations