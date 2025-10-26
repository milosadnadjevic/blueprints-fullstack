import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

export const FaqSection = ({ data }) => {
    return (
        <section className="relative w-full py-20">
            <div className="flex flex-col items-start gap-8 max-w-[1156px] mx-auto px-4">
                <div className="flex flex-col items-start overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
                    <h2 className="[font-family:'BRSonoma-SemiBold-Regular',Helvetica] font-normal text-black text-[112px] tracking-[-8.50px] leading-[112px] whitespace-nowrap">
                        FAQ
                    </h2>
                </div>

                <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {data.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-t border-b border-[#0000001a]"
                            >
                                <AccordionTrigger className="py-4 hover:no-underline transition-colors">
                                    <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#111111] text-base tracking-[0] leading-6">
                                        {item.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#111111] text-base tracking-[0] leading-6">
                                        {item.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
