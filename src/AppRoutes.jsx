import { createBrowserRouter } from "react-router-dom";
import TicketSelection from "./pages/TicketSelection";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketBooked from "./pages/TicketBooked";
import { stepLinks } from "./data";
import TicketList from "./pages/TicketList";
import MainContentLayout from "./layouts/MainContentLayout";
import FormStepLayout from "./layouts/FormStepLayout";
import TicketPage from "./pages/TicketPage";
import About from "./pages/About";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContentLayout />,
    children: [
      {
        path: "/",
        element: <FormStepLayout />,
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
        path: "my-tickets",
        element: <TicketList />,
      },
      {
        path: "my-tickets/ticket-page/:ticketId",
        element: <TicketPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
