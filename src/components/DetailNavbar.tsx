"use client"

import { useCallback } from "react"
import NavbarButton from "./NavbarButton"

interface DetailNavbarProps {
    menuItems: string[];
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

const DetailNavbar = ({ menuItems, selectedItem, setSelectedItem }: DetailNavbarProps) => {

    const handleClick = useCallback((item: string) => {
        setSelectedItem(item);
    }, [setSelectedItem]);

    return (
        <div className="bg-inherit flex justify-between w-full mb-12" data-testid="detail-navbar">
            {
                menuItems.map((item: string) => (
                    <NavbarButton 
                        text={item} 
                        onClick={() => handleClick(item)} 
                        selected={selectedItem === item} 
                        key={item}
                    />
                ))
            }
        </div>
    )
}

export default DetailNavbar;