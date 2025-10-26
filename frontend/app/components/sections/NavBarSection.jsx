import React from "react";
import { Button } from "../ui/button";

const navItems = [
    {
        label: "INTRO",
        font: "[font-family:'BRSonoma-SemiBold-Regular',Helvetica]",
    },
    {
        label: "AGENDA",
        font: "[font-family:'BRSonoma-SemiBold-Regular',Helvetica]",
    },
    {
        label: "SPEAKERS",
        font: "[font-family:'BRSonoma-SemiBold-Regular',Helvetica]",
    },
];

export const NavBarSection = () => {
    return (
        <nav className="w-full bg-white shadow-[0px_1px_22px_#0000000d] translate-y-[-1rem] animate-fade-in opacity-0">
            <div className="max-w-[1447px] mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        className="h-[70px] w-auto"
                        alt="Logo"
                        src="https://c.animaapp.com/mh6sbc8t9JNhJV/img/rectangle-2.png"
                    />
                </div>

                <div className="flex items-center gap-12">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    className={`${item.font} font-semibold text-black text-base leading-6 hover:opacity-70 transition-opacity`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant="outline"
                        className="h-auto px-6 py-2 border-2 border-black border-t-0 border-r-0 bg-white hover:bg-gray-50 transition-colors rounded-none"
                    >
                        <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-black text-base leading-6">
                            GET TICKETS
                        </span>
                    </Button>
                </div>
            </div>
        </nav>
    );
};
