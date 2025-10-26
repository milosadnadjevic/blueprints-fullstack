"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AgendaSection } from "../../components/sections/AgendaSection";
import { EventSummarySection } from "../../components/sections/EventSummarySection";
import { FaqSection } from "../../components/sections/FaqSection";
import { FooterSection } from "../../components/sections/FooterSection";
import { HeroSection } from "../../components/sections/HeroSection";
import { NavBarSection } from "../../components/sections/NavBarSection";
import { SpeakersSection } from "../../components/sections/SpeakersSection";
import { TheEventSection } from "../../components/sections/TheEventSection";

export default function EventPage() {
  const params = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5001/api/events/${params.eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setEventData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
        setLoading(false);
      });
  }, [params.eventId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl">Event not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full flex flex-col">
      <NavBarSection />
      <HeroSection data={eventData.hero} />
      <EventSummarySection data={eventData.introduction} />
      <AgendaSection data={eventData.agenda} />
      <SpeakersSection data={eventData.speakers} />
      <TheEventSection
        eventDetails={eventData.eventDetails}
        previousEvents={eventData.previousEvents}
      />
      <FaqSection data={eventData.faq} />
      <FooterSection />
    </div>
  );
}
