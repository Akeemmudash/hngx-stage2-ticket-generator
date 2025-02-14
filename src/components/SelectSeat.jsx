import TicketSelectionOption from "./TicketSelectionOption";

const SelectSeat = () => {
  return (
    <section className="space-y-2">
      <h3 className="font-Roboto text-base leading-[150%] font-normal">
        Select Ticket Type:
      </h3>
      <div className="bg-secondary-darker border-secondary-dark flex flex-col justify-between gap-6 rounded-3xl border p-4 md:flex-row">
        <TicketSelectionOption title="Free" type="Regular Access" />
        <TicketSelectionOption title="$150" type="VIP Access" />
        <TicketSelectionOption title="$200" type="VVIP Access" />
      </div>
    </section>
  );
};

export default SelectSeat;
