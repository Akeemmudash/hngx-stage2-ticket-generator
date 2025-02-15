import { ticketsPriceList } from "../data";
import TicketSelectionOption from "./TicketSelectionOption";

const TicketTypeGroup = () => {
  return (
    <section className="space-y-2">
      <h3 className="font-Roboto text-base leading-[150%] font-normal">
        Select Ticket Type:
      </h3>
      <form className="bg-secondary-darker border-secondary-dark flex flex-col justify-between gap-6 rounded-3xl border p-4 md:flex-row">
        {Object.entries(ticketsPriceList).map(([name, price]) => (
          <TicketSelectionOption key={price} price={price} value={name} />
        ))}
      </form>
    </section>
  );
};

export default TicketTypeGroup;
