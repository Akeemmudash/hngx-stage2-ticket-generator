import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

const TicketList = () => {
  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  if (tickets.length === 0) {
    return (
      <h2 className="text-center text-2xl text-gray-500 italic">
        No tickets booked yet.
      </h2>
    );
  }

  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-center text-2xl font-bold">Booked Tickets</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tickets.map((ticket, index) => (
          <MotionLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.995 }}
            to={`ticket-page/${ticket.ticketId}`}
            key={index}
            className="bg-background border-primary-light flex flex-col items-center rounded-lg border p-4 shadow-sm"
          >
            {ticket.avatar && (
              <img
                src={ticket.avatar}
                alt={ticket.name}
                className="mb-3 h-16 w-16 rounded-full object-cover"
              />
            )}
            <h3 className="font-myeongjo text-lg font-semibold">
              {ticket.name}
            </h3>
            <p className="text-sm text-gray-600">{ticket.email}</p>
            <p className="mt-2 text-sm text-blue-500">
              <span className="text-primary-light uppercase">
                {ticket.ticketType}
              </span>{" "}
              ticket (x
              {ticket.ticketsNumber})
            </p>
            {ticket.specialRequest && (
              <p className="mt-1 text-xs text-gray-500">
                Special Request: {ticket.specialRequest}
              </p>
            )}
          </MotionLink>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
