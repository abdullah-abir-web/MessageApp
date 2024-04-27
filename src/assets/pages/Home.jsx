import react from "react";
import Groups from "../../components/allGroupItems/Groups";
import MyGroup from "../../components/allGroupItems/MyGroup";
import FriendItems from "../../components/FriendItems";
import PeopleItems from "../../components/allGroupItems/PeopleItems";
import FriendRequestsItems from "../../components/allGroupItems/FriendRequestsItems";
import BlockListItems from "../../components/allGroupItems/BlockListItems";
const Home = () => {
  const userFromLocal = JSON.parse(localStorage.getItem("user"));
  // console.log(userFromLocal);
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
