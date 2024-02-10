import "./App.css";
import HomePage from "./Components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Read from "./Components/Read";
import ReadPoem from "./Components/ReadPoem";
import PoemWriter from "./Components/PoemWriter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <div>Error!</div>,
    },
    {
      path: "read/:page",
      element: <Read />,
    },
    {
      path: "poem/:poemId",
      element: <ReadPoem />,
    },
    {
      path: "write",
      element: <PoemWriter />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
