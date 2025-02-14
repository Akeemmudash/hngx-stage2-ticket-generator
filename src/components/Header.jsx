const Header = () => {
  return (
    <section className="self-stretch h-[200px] p-6 bg-[#23a0b5] rounded-3xl border-l-2 border-r-2 border-b-2 border-[#07363e] backdrop-blur-[14px] flex-col justify-start items-center gap-2 flex">
      <div className="self-stretch h-[118px] flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch text-center text-neutral-50 text-[62px] font-normal font-['Road Rage'] leading-[62px]">
          Techember Fest ”25
        </div>
        <div className="w-[340px] text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </div>
      </div>
      <div className="justify-start items-start gap-4 inline-flex">
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          📍 [Event Location]
        </div>
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          | |
        </div>
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          March 15, 2025 | 7:00 PM
        </div>
      </div>
    </section>
  );
};

export default Header;
