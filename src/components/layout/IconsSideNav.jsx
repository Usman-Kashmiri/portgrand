import React from "react";
import { useNavigate } from "react-router-dom";
import hamburgerIcon from "../../assets/images/icons/hamburger.png";
import calenderIcon from "../../assets/images/icons/calendar.png";
import databaseIcon from "../../assets/images/icons/database.png";
import ticketsIcon from "../../assets/images/icons/tickets.png";
import searchIcon from "../../assets/images/icons/search.png";
import usersIcon from "../../assets/images/icons/users.png";
import notesIcon from "../../assets/images/icons/notes.png";
import meterIcon from "../../assets/images/icons/meter.png";
import gearIcon from "../../assets/images/icons/gear.png";
import bellIcon from "../../assets/images/icons/bell.png";
import faqIcon from "../../assets/images/icons/faq.png";
import bugIcon from "../../assets/images/icons/bug.png";

const IconsSideNav = () => {
  const navigate = useNavigate();

  return (
    <div className="icons-side-nav overflow-hidden d-flex py-3 flex-column gap-2 position-relative align-items-center justify-content-between px-3 py-3 bg-white border-end min-vh-100 max-height-100vh">
      {/* Meta logo */}
      <img
        className="w-100 position-relative"
        src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
        alt="meta logo"
      />

      {/* Portgrand logo */}
      <img
        className="rounded-circle mt-4 cursor-pointer position-relative"
        style={{width:'35px', height: '35px'}}
        src="data:image/jpeg;base64,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"
        alt="portgrand logo"
        onClick={() => navigate("/")}
      />

      {/* icons navigation */}
      <div className="d-flex gap-3 flex-column mt-4 px-1">
        <span>
          <img src={meterIcon} alt="meterIcon" className="side-nav-icon" />
        </span>
        <span>
          <img
            src={calenderIcon}
            alt="calenderIcon"
            className="side-nav-icon"
          />
        </span>
        <span>
          <img src={notesIcon} alt="notesIcon" className="side-nav-icon" />
        </span>
        <span>
          <img src={usersIcon} alt="usersIcon" className="side-nav-icon" />
        </span>
        <span>
          <img src={ticketsIcon} alt="ticketsIcon" className="side-nav-icon" />
        </span>
        <span className="active">
          <img
            src={databaseIcon}
            alt="databaseIcon"
            className="side-nav-icon"
          />
        </span>
        <span>
          <img
            src={hamburgerIcon}
            alt="hamburgerIcon"
            className="side-nav-icon"
          />
        </span>
      </div>

      {/* Lower icons */}
      <div className="d-flex flex-column gap-2 border-top px-1 pt-3 mt-4">
        <span>
          <img src={gearIcon} alt="gearIcon" className="side-nav-icon" />
        </span>
        <span>
          <img src={bellIcon} alt="bellIcon" className="side-nav-icon" />
        </span>
        <span>
          <img src={searchIcon} alt="searchIcon" className="side-nav-icon" />
        </span>
        <span>
          <img src={faqIcon} alt="faqIcon" className="side-nav-icon" />
        </span>
        <span>
          <img src={bugIcon} alt="bugIcon" className="side-nav-icon" />
        </span>
      </div>
    </div>
  );
};

export default IconsSideNav;
