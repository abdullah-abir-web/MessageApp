import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoChatboxOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdGroup } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <nav className=" w-48  bg-white  pl-6 pt-10 shadow-lg">
      <div>
        <img src="/c.png" alt="" className="w-48" />
      </div>
      <div>
        <ul className="navTtems mt-6 flex flex-col gap-4 text-xl  font-semibold font-secondary ">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 py-3 px-3  bg-primary rounded-lg text-white w-fit"
            >
              <IoMdHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 py-3 px-3 w-fit rounded-lg"
            >
              <IoChatboxOutline />
              <span> Chat</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 py-3 px-3 w-fit rounded-lg"
            >
              <MdGroup />
              <span>Group</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 py-3 px-3 w-fit rounded-lg"
            >
              <FaRegUser />
              <span>Friends</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 py-3 px-3 w-fit rounded-lg"
            >
              <FaBars />
              <span>People</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 py-3 px-3 w-fit rounded-lg"
            >
              <img src="/public/user.png" width={40} alt="user" />
              <div>
                <p className="text-xl font-secondary font-semibold text-primary">
                  User Name
                </p>
                <p className="text-lg font-secondary font-normal text-secondary">
                  Edit Profile
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
