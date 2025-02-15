import { useContext } from "react";
import { TicketSelectionContext } from "../context/TicketSelectionContext";

const useTicketSelectionContext = () => {
  const value = useContext(TicketSelectionContext);
  return value;
};

export default useTicketSelectionContext;
