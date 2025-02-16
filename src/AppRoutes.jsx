import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import TicketSelection from "./pages/TicketSelection";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketBooked from "./pages/TicketBooked";
import { stepLinks } from "./data";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TicketSelection />,
      },

      {
        path: Object.values(stepLinks)[1],
        element: <AttendeeDetails />,
      },
      {
        path: Object.values(stepLinks)[2],
        element: <TicketBooked />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
