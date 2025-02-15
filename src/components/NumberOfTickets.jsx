import SelectTicketsNumber from "./SelectTicketsNumber";

const NumberOfTickets = () => {
  return (
    <div className="font-roboto space-y-2 text-base leading-[150%] font-normal">
      <h3 className="mb-2">Number of Tickets</h3>
      <SelectTicketsNumber />
    </div>
  );
};

export default NumberOfTickets;
