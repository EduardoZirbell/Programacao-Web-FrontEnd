import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { SingUpPage } from "./pages/singnup";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/singup",
    element: <SingUpPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
