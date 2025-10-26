import React from "react";

export const AgendaSection = ({ data }) => {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div className="flex flex-col items-center gap-[60px]">
                    <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-[112px] tracking-[-8.50px] leading-[112px] [font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-black">
                        Agenda
                    </h2>

                    <div className="w-full flex flex-col gap-5 mt-16">
                        {data.map((item, index) => (
                            <article
                                key={index}
                                className="translate-y-[-1rem] animate-fade-in opacity-0 flex items-start border-l-[7px] border-black min-h-[72px] py-0 transition-colors hover:bg-gray-50"
                                style={{
                                    "--animation-delay": `${
                                        200 + index * 100
                                    }ms`,
                                }}
                            >
                                <div className="flex flex-col gap-2 py-2 pl-10 w-[404px] flex-shrink-0">
                                    <time className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#111111] text-xl tracking-[0] leading-6">
                                        {item.time}
                                    </time>
                                    <h3 className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#111111] text-xl tracking-[0] leading-6">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="flex-1 py-0 pl-[54px]">
                                    <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-6">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-center py-6 pr-0 w-[178px] flex-shrink-0">
                                    <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#111111] text-2xl tracking-[0] leading-6">
                                        {item.location}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
