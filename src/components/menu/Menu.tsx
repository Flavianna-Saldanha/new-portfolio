"use client"

import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "@/components/menu/MenuItem";
import { useState } from "react";
import { menuList } from "@/data/menuList";


export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="border-2 border-red-500">
            <section className="flex justify-between mx-18 mt-11">
                <div className="text-4xl">
                    <Link href="/">
                        FS
                    </Link>
                </div>
                <nav>
                     <Link href="/">
                        <button
                            onClick={toggleMenu}
                            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                            className="focus:outline-none"
                        >
                            <Image 
                                src="/assets/menu.png" 
                                width={40} 
                                height={40} 
                                alt="Logo do Menu"
                            />
                        </button>
                     </Link>
                </nav>
            </section>
            {menuOpen && (
                <div>
                    <ul className="w-full h-screen z-10 bg-slate-950/95 uppercase absolute left-0 mt-12 text-[20px] text-center flex flex-col gap-10 "  >
                        {menuList.map((item, index) => (
                            <MenuItem 
                                key={index}
                                url={item.url}
                                label={item.label}
                            />
                        ))}
                        
                    </ul>
                </div>
            )}
        </header>
    );
}