import React from "react";

export const FooterSection = () => {
    return (
        <footer className="w-full py-20">
            <div className="flex flex-col items-center gap-6 px-4">
                <h2 className="[font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-black text-[80px] md:text-[100px] lg:text-[120px] text-center tracking-[-4.50px] leading-tight">
                    The BluePrint Series
                </h2>

                <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 text-center">
                    © 2025 THE GRADIENT GROUP, LLC
                </p>
            </div>
        </footer>
    );
};
