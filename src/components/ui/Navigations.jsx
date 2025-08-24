import { BiSolidPhone } from "react-icons/bi"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { TbMinusVertical } from "react-icons/tb";
import Logo from "./Logo";
import FilterSearch from "./FilterSearch";
import { useState } from "react";
import AccDropdown from "./AccDropdown";
import CartSidebar from "./CartSidebar";
import Menu from "./Menu";
function Navigations() {
    const [drop, setDrop] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false);
    // const [sidebar, setSidebar] = useState(false)
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
    return (
        <div className=" w-full shadow-lg/20 sh">
            <div className=" hidden min-[1200px]:flex justify-between px-25 py-1.5 border-b border-b-gray-300">
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
            <div className="min-[1200px]:px-25 py-6 flex items-center gap-8 box-border">
                <Logo />
                <div className=" flex items-center min-[1200px]:gap-8 justify-end w-full bg-amber-100">
                    <FilterSearch />
                    <div className="relative inline-block">
                        <div
                            onClick={handleDropdown}
                            className="h-full py-3 text-2xl cursor-pointer"
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
                            <AccDropdown />
                        </div>
                    </div>
                    <div onClick={() => setIsCartOpen(true)}
                        className="
                    flex w-1/6 items-center 
                    gap-2 px-0 py-3 text-2xl
                    ">
                        <HiOutlineShoppingBag />
                        <p className=" max-[1200px]:hidden ">0 ៛</p>
                    </div>
                </div>
            </div>
            <div className="px-25 py-6 flex items-center gap-5">
                <Menu />
            </div>

            <CartSidebar
                Open={isCartOpen}
                Close={() => setIsCartOpen(false)}
            />
        </div>
    )
}

export default Navigations