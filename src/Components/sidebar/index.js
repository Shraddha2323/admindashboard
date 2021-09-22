import React from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineHome,
  AiOutlineDoubleRight,
  AiOutlineSchedule,
  AiOutlineSetting,
} from "react-icons/ai";

import { BsChatSquare } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { RiTodoLine } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";
import { ImQrcode } from "react-icons/im";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdStorage } from "react-icons/md";

const NavBar = (props) => {
  const { openNavbar, setOpenNavbar } = props;

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "3fr 10fr 1fr",
          width: "100%",
          height: "100%",
          gridGap: "2px",
          color: "#fff",
        }}
      >
        <div className="profile">
          <div className="flex">
            <div className="profile-photo flex">
              <img src="https://source.unsplash.com/random" alt="profile"></img>
            </div>
            {openNavbar && (
              <div>
                <div className="profile-head">Jesse Pinkman</div>
                <div className="profile-desp">Fitness & Nutrition Coach</div>
              </div>
            )}
          </div>
        </div>
        <div className="menu">
          <ul
            className="menu-items"
            style={{ margin: openNavbar ? "50px" : "25px" }}
          >
            <li className="menu-item">
              <AiOutlineHome />
              {openNavbar && <span>Home</span>}
            </li>
            <li className="menu-item">
              <BsChatSquare />
              {openNavbar && <span>Chat</span>}
            </li>
            <li className="menu-item">
              <AiOutlineSchedule />
              {openNavbar && <span>Schedule</span>}
            </li>
            <li className="menu-item">
              <IoIosPeople />
              {openNavbar && <span>Clients</span>}
            </li>
            <li className="menu-item">
              <RiTodoLine />
              {openNavbar && <span>Bookings</span>}
            </li>
            <li className="menu-item">
              <ImQrcode />
              {openNavbar && <span>Programs</span>}
            </li>
            <li className="menu-item">
              <BiPackage />
              {openNavbar && <span>Packages</span>}
            </li>
            <li className="menu-item">
              <MdStorage />
              {openNavbar && <span>Resources</span>}
            </li>
            <li className="menu-item">
              <FaMoneyBillWave />
              {openNavbar && <span>Finance</span>}
            </li>
            <li className="menu-item">
              <AiOutlineSetting />
              {openNavbar && <span>Settings</span>}
            </li>
          </ul>
        </div>
        <div className="collapse">
          <button onClick={() => setOpenNavbar(!openNavbar)} className="flex">
            {openNavbar && "Collapse"}
            {openNavbar ? (
              <AiOutlineDoubleLeft style={{ color: "#fff" }} />
            ) : (
              <AiOutlineDoubleRight style={{ color: "#fff" }} />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
