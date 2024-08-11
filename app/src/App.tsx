import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { SingUpPage } from "./pages/singnup";
import Toaster from './component/Toaster';
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
    element: <HomePage />
  }
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App;
