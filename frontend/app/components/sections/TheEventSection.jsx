import React from "react";

export const TheEventSection = ({ eventDetails, previousEvents }) => {
    return (
        <section className="w-full py-40">
            <div className="max-w-[1156px] mx-auto px-4">
                <header className="flex justify-center mb-[60px] translate-y-[-1rem] animate-fade-in opacity-0">
                    <h2 className="[font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-black text-[112px] tracking-[-8.50px] leading-[112px] whitespace-nowrap">
                        The Event
                    </h2>
                </header>

                <div className="flex gap-[86px] mb-[60px]">
                    <article className="flex-1 max-w-[535px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-[22px]">
                                <div className="w-3 h-3 bg-black flex-shrink-0" />
                                <h3 className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6">
                                    INTRODUCTION OF THIS EVENT
                                </h3>
                            </div>

                            <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[34px]">
                                {eventDetails.description}
                            </p>
                        </div>
                    </article>

                    <article className="flex-1 max-w-[535px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-[22px]">
                                <div className="w-3 h-3 bg-black flex-shrink-0" />
                                <h3 className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6">
                                    {previousEvents.title}
                                </h3>
                            </div>

                            <div className="w-full h-[699px]">
                                <img
                                    src={previousEvents.images[0]}
                                    alt="Past event"
                                    className="w-[453px] h-[679px] object-cover"
                                />
                            </div>
                        </div>
                    </article>
                </div>

                <div className="relative w-full h-[425px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    <img
                        src={previousEvents.images[1]}
                        alt="Event photo 1"
                        className="absolute object-cover w-[439px] h-[326px] top-[39px] left-[22px]"
                    />
                    <img
                        src={previousEvents.images[2]}
                        alt="Event photo 2"
                        className="absolute object-cover w-[472px] h-[345px] top-3.5 left-[330px]"
                    />
                    <img
                        src={previousEvents.images[3]}
                        alt="Event photo 3"
                        className="absolute object-cover w-[423px] h-80 top-[53px] left-[733px]"
                    />
                </div>
            </div>
        </section>
    );
};
