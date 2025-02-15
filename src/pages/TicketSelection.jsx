import { useState } from "react";
import Button from "../components/Button";
import NumberOfTickets from "../components/NumberOfTickets";
import { TicketSelectionContext } from "../context/TicketSelectionContext";
import SelectTicketType from "../components/TicketTypeGroup";
import { event } from "../data";

const TicketSelection = () => {
  const [ticketType, setTicketType] = useState("regular");
  const [ticketsNumber, setTicketsNumber] = useState(1);
  return (
    <TicketSelectionContext.Provider
      value={{ ticketType, setTicketType, ticketsNumber, setTicketsNumber }}
    >
      <div className="space-y-8 sm:p-6">
        <div className="banner border-secondary-dark mt-8 space-y-2 rounded-3xl border-2 p-6">
          <div className="text-center">
            <h2 className="font-road-rage mb- mb-2 text-center text-5xl md:text-6xl lg:text-7xl">
              Techember Fest ”25
            </h2>
            <p className="font-Roboto mx-auto text-sm leading-[150%] font-normal tracking-wide sm:max-w-[340px] sm:text-base">
              Join us for an unforgettable experience at {event.eventName} !
              Secure your spot now.
            </p>
          </div>
          <p className="font-roboto flex flex-col items-center justify-center gap-1 text-base leading-[150%] font-normal md:flex-row md:gap-4">
            <span>📍 {event.eventLocation}</span>
            <span className="hidden md:inline-flex">| |</span>
            <span>{event.eventDateTime}</span>
          </p>
        </div>
        <div className="bg-secondary-dark h-1 w-full" />
        <SelectTicketType />
        <NumberOfTickets />
        <div className="flex w-full flex-col gap-4 sm:flex-row-reverse sm:gap-6">
          <Button buttonType="link" to="/attendee-details">
            Next
          </Button>
          <Button buttonVariant="outline">Cancel</Button>
        </div>
      </div>
    </TicketSelectionContext.Provider>
  );
};

export default TicketSelection;
