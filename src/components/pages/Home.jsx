import react from "react";
import Groups from "./Groups";
import MyGroup from "./MyGroup";
import FriendItems from "../FriendItems";
import PeopleItems from "./PeopleItems";
import FriendRequestsItems from "./FriendRequestsItems";
import BlockListItems from "./BlockListItems";
const Home = () => {
  return (
    <div className="bg-common w-full">
      <div className="flex gap-6 py-6 px-6">
        <MyGroup />
        <Groups />
        <FriendItems />
      </div>
      <div className="flex gap-6 py-6 px-6">
        <PeopleItems />
        <FriendRequestsItems />
        <BlockListItems />
      </div>
    </div>
  );
};
export default Home;
