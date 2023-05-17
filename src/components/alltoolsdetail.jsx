import React from "react";
import "./alltool.css";
import { Row, Col } from "react-bootstrap";
import content from "./images/contenticon.png";
// import Sidebar from '../components/sidebar'
import { engageAudience, manage } from "../data/data";
import { useNavigate } from "react-router-dom";
// import Homedetail from '../components/homedetail'

const Alltooldetails = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", backgroundColor: "#f5fafe" }}>
      <div className="searchbox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
            ></path>
          </g>
        </svg>
        <input
          className="searchinput"
          placeholder="Search all tool for keywords"
        />
      </div>
      <Row style={{ width: "90%", marginLeft: "10%" }}>
        <Col lg={6}>
          <p className="toolheadingone">Engaged Audience</p>
          {engageAudience.map((value, i) => {
            return (
              <div style={{ display: "flex", paddingBottom: "0px" }} key={i}>
                <img
                  className={
                    value.heading === "Content" ? "cursor-pointer" : ""
                  }
                  width={25}
                  height={25}
                  src={value.image}
                  onClick={
                    value.heading === "Content"
                      ? () => navigate("/content")
                      : null
                  }
                />
                {/* <img  width={25} height={25} src={content}/> */}
                <div className="toolfirst">
                  {/* <p> */}
                  <span
                    className={
                      value.heading === "Content" ? "cursor-pointer" : ""
                    }
                    onClick={
                      value.heading === "Content"
                        ? () => navigate("/content")
                        : null
                    }
                  >
                    {value.heading}
                  </span>
                  {/* </p> */}

                  <p className="tooldetails">{value.details}</p>
                </div>
                {/* <br /> */}
              </div>
            );
          })}

          <p className="toolheadingone">Advertise </p>
        </Col>
        <Col lg={6}>
          <p className="toolheadingone">Manage </p>
          {manage.map((value, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                }}
                key={i}
              >
                <img
                  className={
                    value.heading === "Billing" ? "cursor-pointer" : ""
                  }
                  width={25}
                  height={25}
                  src={value.image}
                  onClick={
                    value.heading === "Billing"
                      ? () => navigate("/payment-activity")
                      : null
                  }
                />
                {/* <img  width={25} height={25} src={content}/> */}
                <div className="toolfirst">
                  <span
                    className={
                      value.heading === "Billing" ? "cursor-pointer" : ""
                    }
                    onClick={
                      value.heading === "Billing"
                        ? () => navigate("/payment-activity")
                        : null
                    }
                  >
                    <span>{value.heading}</span>
                    {value?.icon && <img width={25} src={value.icon} />}
                  </span>

                  <p className="tooldetails">{value.details}</p>
                </div>
                {/* <br /> */}
              </div>
            );
          })}
          {/* <p className='toolfirst'>
                Setting
                </p> */}
        </Col>
      </Row>
    </div>
  );
};

export default Alltooldetails;
