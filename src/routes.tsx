import { createBrowserRouter } from "react-router-dom";
import { App } from "./layouts/App";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },

      {
        path: '/status',
        element: <Status />
      }
    ]
  },

  
])