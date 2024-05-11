import react from "react";
import FriendRequestsItems from "../../components/allGroupItems/FriendRequestsItems";
import BlockListItems from "../../components/allGroupItems/BlockListItems";
const Home = () => {
  const userFromLocal = JSON.parse(localStorage.getItem("user"));
  // console.log(userFromLocal);
  return (
    <div className="bg-common w-full">
      <div className="flex gap-6 py-6 px-6"></div>
      <div className="flex gap-6 py-6 px-6">
        {/* <BlockListItems /> */}
      </div>
    </div>
  );
};
export default Home;
