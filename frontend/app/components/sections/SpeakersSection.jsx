import React from "react";
import { Card, CardContent } from "../ui/card";

export const SpeakersSection = ({ data }) => {
    return (
        <section className="relative w-full py-20">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div className="flex flex-col items-center gap-[60px]">
                    <h2 className="[font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-[112px] tracking-[-8.50px] leading-[112px] text-black translate-y-[-1rem] animate-fade-in opacity-0">
                        Speakers
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {data.map((speaker, index) => (
                            <Card
                                key={index}
                                className="w-[302px] border-0 shadow-none bg-transparent translate-y-[-1rem] animate-fade-in opacity-0"
                                style={{
                                    "--animation-delay": `${
                                        200 + index * 200
                                    }ms`,
                                }}
                            >
                                <CardContent className="flex flex-col items-center gap-6 p-0">
                                    <div
                                        className="w-[294px] h-[295px] rounded-full bg-cover bg-center bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${speaker.image})`,
                                        }}
                                    />

                                    <div className="flex flex-col items-center gap-2 w-full">
                                        <h3 className="[font-family:'IBM_Plex_Sans',Helvetica] font-medium text-2xl tracking-[-0.43px] leading-[37px] text-black">
                                            {speaker.name}
                                        </h3>

                                        <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-2xl tracking-[0] leading-6 text-[#464646] opacity-50">
                                            {speaker.role}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
