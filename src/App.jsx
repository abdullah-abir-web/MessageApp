import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./assets/pages/Home";
import Registration from "./assets/pages/Registration";
import Layout from "./components/allGroupItems/Layout";
import Login from "./assets/pages/Login";
import User from "./components/page/User";
import Chatbox from "./components/page/Chatbox";
import PeopleList from "./components/page/PeopleList";
import FriendList from "./components/page/FriendList";
import GroupList from "./components/page/GroupList";
import NewsFeed from "./components/page/NewsFeed";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/Chatbox" element={<Chatbox />}></Route>
          <Route path="/people" element={<PeopleList />}></Route>
          <Route path="/FriendList" element={<FriendList />}></Route>
          <Route path="/GroupList" element={<GroupList />}></Route>
          <Route path="/NewsFeed" element={<NewsFeed />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
