import { useParams } from "react-router-dom";
import Ticket from "../components/Ticket";
import { useRef } from "react";
import useTicketDownload from "../hooks/useTicketDownload";
import Button from "../components/Button";

const TicketPage = () => {
  const { ticketId } = useParams();
  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  const ticket = tickets.find(
    (savedTicket) => savedTicket.ticketId === ticketId,
  );
  const ticketRef = useRef(null);
  const { handleDownload, isDownloading } = useTicketDownload(ticketRef);
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Ticket</h2>
      <div className="mt-8 flex w-full flex-col items-center space-y-8">
        {ticket === undefined ? (
          <p className="text-error text-center">Ticket not Found!</p>
        ) : (
          <>
            <Ticket
              avatar={ticket.avatar}
              email={ticket.email}
              name={ticket.name}
              ticketId={ticketId}
              ticketRef={ticketRef}
              ticketType={ticket.ticketType}
              userRequest={ticket.specialRequest}
              ticketsNumber={ticket.ticketsNumber}
              key={ticketId}
            />
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
              <Button buttonVariant="outline" buttonType={"link"} to="/">
                Book Another Ticket
              </Button>
              <Button
                onClick={handleDownload}
                className={`${isDownloading ? "cursor-not-allowed" : ""}`}
                disabled={isDownloading}
              >
                {isDownloading ? "Downloading" : "Download ticket"}
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TicketPage;
