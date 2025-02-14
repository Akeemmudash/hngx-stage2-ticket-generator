const TicketSelectionOption = ({ title, type }) => {
  return (
    <div className="border-primary-dark w-full flex-1 cursor-pointer flex-col items-start rounded-xl border-2 p-3 md:aspect-[15/11]">
      <h4 className="font-Roboto mb-4 text-2xl leading-[110%] font-semibold text-white not-italic">
        {title}
      </h4>
      <p className="text-card-foreground text-light text-base leading-[150%] font-normal uppercase">
        {type}
      </p>
      <p className="font-roboto text-sm leading-[150%] font-normal">20/52</p>
    </div>
  );
};

export default TicketSelectionOption;
