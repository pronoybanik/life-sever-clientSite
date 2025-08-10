import { RouterProvider } from "react-router-dom";
import allRouter from "./Routers/AllRouters";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      
      <RouterProvider router={allRouter}></RouterProvider>
    </div>
  );
}

export default App;
