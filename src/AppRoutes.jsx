import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import TicketSelection from "./pages/TicketSelection";
import AttendeeDetails from "./pages/AttendeeDetails";
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
        path: "attendee-details",
        element: <AttendeeDetails />,
      },
      {
        path: "book-successful",
        element: "book-successful",
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
