import { RouterProvider } from "react-router-dom";
import allRouter from "./Routers/AllRouters";
// import './App.css'

function App() {

  return (
    <div>
      <RouterProvider router={allRouter}></RouterProvider>
    </div>
  )
}

export default App;
