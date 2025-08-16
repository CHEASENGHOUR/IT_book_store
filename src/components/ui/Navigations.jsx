import { BiSolidPhone } from "react-icons/bi"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { TbMinusVertical } from "react-icons/tb";
import Logo from "./Logo";
function Navigations() {
    const miniLinks = [
        {
            icon: <BiSolidPhone/>,
            text: "+855 68 625 866"
        },
        {
            icon: <HiOutlineShoppingBag/>,
            text: "កន្រក់សៀវភៅអ្នក"
        },
        {
            icon: <GoPerson/>,
            text: "គណនីខ្ញុំ"
        },
    ]
    return (
        <div className=" w-full">
            <div className="flex justify-between px-40 py-1.5 border-b border-b-gray-300">
                <p>សូមស្វារគម៍មកកាន់​ គេហទំព័រលក់សៀវភៅ IT</p>
                <div className="flex gap-2">
                    {
                        miniLinks.map((item, index) => (
                            <p key={index} className="flex items-center gap-1.5">
                                {item.icon} {item.text}
                                {
                                index < miniLinks.length - 1 && <span className="mx-1 text-gray-400">
                                    <TbMinusVertical/>
                                </span>
                                }
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className="px-40 py-6">
                <Logo/>
                
            </div>

        </div>
    )
}

export default Navigations