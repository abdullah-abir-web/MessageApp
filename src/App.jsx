import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Registration from "./components/pages/Registration";
import Layout from "./components/Layout";
import Login from "./components/pages/Login";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );
  

  return <RouterProvider router={router} />;
}

export default App;
