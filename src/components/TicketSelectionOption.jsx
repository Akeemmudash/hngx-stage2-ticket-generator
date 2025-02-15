import { memo, useCallback, useEffect, useRef, useState } from "react";
import useTicketSelectionContext from "../hooks/useTicketSelectionContext";
import { motion } from "framer-motion";

const TicketSelectionOption = memo(function TicketSelectionOption({
  price,
  value,
}) {
  const optionTicketType = value.split(" ")[0].toLowerCase();
  const { setTicketType, ticketType } = useTicketSelectionContext();
  const ticketRef = useRef(null);
  const isTicketChecked = ticketType === optionTicketType;

  const handleTicketChange = useCallback(
    () => setTicketType(optionTicketType),
    [optionTicketType, setTicketType],
  );

  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    function handleKeyDown(event) {
      if (isFocused && event.key === "Enter") {
        handleTicketChange();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [ticketType, setTicketType, isFocused, handleTicketChange]);
  return (
    <div className="flex-1">
      <input
        type="radio"
        value={optionTicketType}
        name="ticketOption"
        aria-hidden
        checked={isTicketChecked}
        className="peer hidden"
        id={optionTicketType}
        onChange={handleTicketChange}
      />
      <motion.label
        htmlFor={optionTicketType}
        tabIndex={0}
        ref={ticketRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        whileHover={{ scale: 1.075 }}
        whileTap={{ scale: 0.975 }}
        className="border-primary-dark focus-visible:ring-offset-primary peer-checked:bg-secondary-lighter focus0visible:ring-2 flex w-full cursor-pointer flex-col items-start rounded-xl border-2 p-3 transition-colors duration-200 md:aspect-[15/11]"
      >
        <h4 className="font-Roboto mb-4 text-2xl leading-[110%] font-semibold text-white capitalize not-italic">
          {price}
        </h4>
        <p className="text-card-foreground text-light mb-1 text-base leading-[1.5] font-normal uppercase">
          {value}
        </p>
        <p className="font-roboto text-sm leading-[1.5] font-normal">20/52</p>
      </motion.label>
    </div>
  );
});

export default TicketSelectionOption;
