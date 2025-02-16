import Barcode from "react-barcode";
import ticketBg from "../assets/ticket-bg.svg";
import { event } from "../data";

const Ticket = ({
  ticketRef,
  ticketType,
  ticketsNumber,
  avatar,
  email,
  name,
  ticketId,
  userRequest,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${ticketBg})`,
      }}
      className="flex aspect-[1/2] w-full max-w-xs flex-col bg-cover bg-no-repeat"
      ref={ticketRef}
    >
      <div className="space-y-[1px] py-5 sm:px-[21px]">
        <div className="border-primary bg-ticket-bg-primary mx-auto max-w-[300px] rounded-3xl border p-3.5 md:p-4">
          <div className="text-center">
            <h1 className="font-road-rage mb-1 text-4xl leading-[100%]">
              {event.eventName}
            </h1>
            <div className="space-y-1 p-1 text-[10px] leading-[1.5]">
              <p>📍 {event.eventLocation}</p>
              <p>📅 {event.eventDateTime}</p>
            </div>
          </div>

          <img
            src={avatar}
            alt="avatar"
            width={140}
            height={140}
            crossOrigin="anonymous"
            className="border-primary mx-auto my-5 rounded-xl border-4"
          />

          <div className="border-ticket-border bg-ticket-bg-secondary grid w-full grid-cols-2 grid-rows-2 gap-0 rounded-md border p-1">
            <div className="border-secondary-lighter space-y-1 border-r border-b p-1">
              <p className="text-[10px] leading-[1.5] text-white opacity-35">
                Name
              </p>
              <p className="truncate overflow-hidden text-xs leading-[1.5] font-bold">
                {name}
              </p>
            </div>
            <div className="border-secondary-lighter space-y-1 border-b p-1">
              <p className="text-[10px] leading-[1.5] text-white opacity-35">
                Email
              </p>
              <p
                className="truncate overflow-hidden text-xs leading-[1.5] font-bold"
                title={email}
              >
                {email}
              </p>
            </div>
            <div className="border-secondary-lighter space-y-1 border-r p-1">
              <p className="text-[10px] leading-[1.5] text-white opacity-35">
                Ticket Type
              </p>
              <p className="truncate overflow-hidden text-xs leading-[1.5] uppercase">
                {ticketType}
              </p>
            </div>
            <div className="border-secondary-lighter space-y-1 p-1">
              <p className="text-[10px] leading-[1.5] text-white opacity-35">
                Ticket for
              </p>
              <p className="truncate overflow-hidden text-xs leading-[1.5] uppercase">
                {ticketsNumber}
              </p>
            </div>
            {userRequest !== "" && (
              <div className="border-secondary-lighter col-span-2 space-y-1 border-t p-2">
                <p className="text-[10px] leading-[1.5] text-white opacity-35">
                  Special request?
                </p>
                <p className="text-xs leading-[1.5]">
                  {userRequest[0].toUpperCase() + userRequest.slice(1)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-auto max-w-[300px] pb-4">
        <div className="flex max-w-full justify-center">
          <Barcode
            value={ticketId}
            // displayValue={false}
            background="transparent"
            height={50}
            // width={1}
            lineColor="#fff"
            format="EAN13"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
