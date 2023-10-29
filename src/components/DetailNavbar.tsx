"use client"

import { useState, useCallback } from "react"
import NavbarButton from "./NavbarButton"



const menuItems = [
    "About",
    "Base Stats",
    "Evolution",
    "Moves"
];

const DetailNavbar = () => {

    const [selected, setSelected] = useState<string>(menuItems[0]);

    const handleClick = useCallback((item: string) => {
        setSelected(item);
    }, []);

    return (
        <div className="bg-inherit flex justify-evenly w-full">
            {
                menuItems.map((item: string) => (
                    <NavbarButton 
                        text={item} 
                        onClick={() => handleClick(item)} 
                        selected={selected === item} 
                        key={item}
                    />
                ))
            }
        </div>
    )
}

export default DetailNavbar;