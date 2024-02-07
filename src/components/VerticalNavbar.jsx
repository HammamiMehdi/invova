import React from 'react'
import { useState } from "react";
import { AiOutlineControl } from 'react-icons/ai';
import { RiMenuFoldLine, RiDashboardLine, RiArrowLeftDoubleFill, RiHome8Fill, RiServiceFill, RiOpenaiLine, RiStockFill, RiSettings5Fill } from 'react-icons/ri';
import { navLinks } from "../constants";


const VerticalNavbar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", icon: <RiHome8Fill /> },
        { title: "Services", icon: <RiServiceFill /> },
        { title: "Technologies", icon: <RiOpenaiLine />, gap: true },
        { title: "Projects", icon: <RiStockFill /> },
        { title: "Search", icon: <RiDashboardLine /> },
        { title: "Analytics", icon: <RiDashboardLine /> },
        { title: "Files", icon: <RiDashboardLine />, gap: true },
        { title: "Setting", icon: <RiDashboardLine /> },
    ];

    return (
        <div className="fixed top-0 right-0 z-50 flex items-center h-full">
            <div
                className={` ${
                    open ? "w-72" : "w-20 "
                    } bg-white h-[70vh] p-5 pt-8 relative duration-300 shadow-lg rounded-tl-[20px] rounded-bl-[20px] flex flex-col justify-center`}
            >
                <RiArrowLeftDoubleFill
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full text-dark-purple ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <RiMenuFoldLine
                        className={`cursor-pointer duration-500 ${
                            open && "rotate-[360deg]"
                            } text-dark-purple`}
                    />
                    <h1
                        className={`text-black origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                            }`}
                        style={{ color: "#000833" }} // Change title color here
                    >
                        Invova
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                                } `}
                        >
                            {Menu.icon} {/* Display the icon */}
                            <span className={`${!open && "hidden"} origin-left duration-200`} style={{ color: "#000833" }}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VerticalNavbar;
