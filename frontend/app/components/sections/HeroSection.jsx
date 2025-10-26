import React from "react";

export const HeroSection = ({ data }) => {
    return (
        <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <img
                    className="absolute inset-0 w-full h-full object-cover object-[center_85%]"
                    alt="Event hero"
                    src={data.image}
                />
                <div className="absolute inset-0 w-full h-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(30,0,255,0)_0%,rgba(30,0,255,1)_100%)] opacity-[0.25]" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 max-w-[800px] mx-auto">
                <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <p className="[font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-6 text-center whitespace-nowrap">
                        {data.date}
                    </p>
                </div>

                <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    <h1 className="[font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-white text-6xl text-center tracking-[-4.50px] leading-[58px]">
                        {data.title}
                    </h1>
                </div>

                <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                    <p className="[font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-6 text-center whitespace-nowrap">
                        {data.location}
                    </p>
                </div>
            </div>
        </section>
    );
};
