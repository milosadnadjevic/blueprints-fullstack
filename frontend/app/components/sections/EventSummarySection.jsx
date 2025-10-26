import React from "react";

export const EventSummarySection = ({ data }) => {
    return (
        <section className="relative w-full py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col gap-5">
                    <div className="flex items-start gap-[22px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        <div className="w-3 h-3 bg-black mt-1.5 flex-shrink-0" />
                        <h2 className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-6">
                            {data.title}
                        </h2>
                    </div>

                    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                        <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-10">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
