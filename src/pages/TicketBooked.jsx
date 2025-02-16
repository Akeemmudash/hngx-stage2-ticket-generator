import { useEffect, useRef } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Ticket from "../components/Ticket";
import useTicketDownload from "../hooks/useTicketDownload";

const TicketBooked = () => {
  const ticketRef = useRef(null);
  const navigate = useNavigate();
  const avatar = localStorage.getItem("avatar");
  const { isDownloading, handleDownload } = useTicketDownload(ticketRef);

  const { name, email, specialRequest } = JSON.parse(
    localStorage.getItem("attendeeForm"),
  );
  const { ticketType, ticketsNumber, ticketId } = JSON.parse(
    localStorage.getItem("ticketDetails"),
  );

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];

    const newTicket = {
      avatar,
      name,
      email,
      ticketType,
      ticketsNumber,
      specialRequest,
      ticketId,
    };

    if (!storedTickets.some((ticket) => ticket.ticketId === ticketId)) {
      storedTickets.push(newTicket);
      localStorage.setItem("tickets", JSON.stringify(storedTickets));
    }

    return () => {
      localStorage.setItem(
        "attendeeForm",
        JSON.stringify({ name: "", email: "", specialRequest: "" }),
      );
      localStorage.setItem(
        "ticketDetails",
        JSON.stringify({
          ticketType: "Regular",
          ticketsNumber: 1,
          ticketId: null,
        }),
      );
      localStorage.setItem("avatar", "");
    };
  }, []);

  useEffect(() => {
    if (!(name, email, avatar)) {
      navigate(-2);
      navigate("/", { replace: true });
    }
  }, [avatar, email, name, navigate]);

  const userRequest = specialRequest || "No Request";

  return (
    <div className="mt-16 space-y-10">
      <hgroup className="text-center">
        <h2 className="mb-3 text-4xl leading-[1.5]">Your Ticket is Booked!</h2>
        <p>Check your email for a copy or you can download</p>
      </hgroup>
      <div className="flex justify-center">
        <Ticket
          avatar={avatar}
          email={email}
          name={name}
          userRequest={userRequest}
          ticketRef={ticketRef}
          ticketType={ticketType}
          ticketsNumber={ticketsNumber}
          ticketId={ticketId}
        />
      </div>
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
    </div>
  );
};

export default TicketBooked;
