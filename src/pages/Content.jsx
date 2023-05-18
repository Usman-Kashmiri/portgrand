import React from "react";
import { useState } from "react";
import ContentIconSideNav from "../components/layout/ContentIconSideNav";
import { Container, Grid } from "@mantine/core";
import { Contentdrops } from "../data/data";
import { Link } from "react-router-dom";
import { DatePickerInput } from "@mantine/dates";
import { selectOptions, selectOptions2 } from "../data/data";
import { Dropdown } from "react-bootstrap";
import contentcolumn from "../components/images/contentcoulums.png";
import searchiwala from "../components/images/searchiwala.png";
import contentdrop from "../components/images/contentfrops.png";
import collectiondrop from "../components/images/collectionsdropimg.png";
import createdrop from "../components/images/creativedropimg.png";
import Tabledetails from "../components/tables";

const Content = () => {
  const contenetabslinkarray = [
    "Published",
    "Schedule",
    "Drafts",
    "Expiring",
    "Expired",
  ];
  const [selectedDate, setSelectedDate] = useState([
    new Date(2023, 3, 17),
    new Date(),
  ]);

  const [secopmnavactiv, setsecopmnavactiv] = useState("Published");
  function activnav(e) {
    setsecopmnavactiv(e.target.id);
  }
  return (
    <div className="content-page custom-grid max-width-100vw">
      <ContentIconSideNav />
      <Container
        className="content-container py-4 px-5 d-flex flex-column w-100"
        fluid
      >
        <Grid className="justify-content-between">
          <Grid.Col span={6} className="d-flex flex-column">
            <h2>Content</h2>
            <span>
              Schedule, publish and manage posts and stories, and more.
            </span>
          </Grid.Col>
          <Grid.Col
            span={4}
            className="d-flex justify-content-end align-items-center gap-2"
          >
            <button className="grey-btn">
              Export Data <i className="fa fa-caret-down"></i>
            </button>
            <button className="grey-btn">
              <i className="fa fa-clapperboard"></i> Create Reel
            </button>
            {/* <button className="blue-btn"><p>Create</p></button> */}
            <div className="dropdown">
              <button
                className="btn createdropdown dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </Grid.Col>
        </Grid>
        <Grid className="justify-content-between">
          <Grid.Col span={2} className="contentsidebar">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button contentdropsmainbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <img
                      width={25}
                      className="contentdropimg"
                      src={contentdrop}
                    />
                    Content
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {Contentdrops.map((value, key) => {
                      const isActive = window.location.pathname === value.path;
                      const activeClass = isActive
                        ? "contentdropsdivactiv"
                        : "contentdropsdiv";
                      return (
                        <div className={activeClass}>
                          <Link
                            to={value.path}
                            key={key}
                            className={activeClass}
                          >
                            {value.name}
                          </Link>
                          {/* <br /> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <img
                      width={25}
                      className="contentdropimg"
                      src={collectiondrop}
                    />
                    Collections
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Link to={"/collection"}>Collection</Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <img
                      width={25}
                      className="contentdropimg"
                      src={createdrop}
                    />
                    Creative a...
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Link to={"/Creative"}>Creative</Link>
                  </div>
                </div>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={10} className="contenttablediv">
            <div className="contenttableinnerdiv">
              <div className="contenttabs">
                {/* <p className="contentabslinks" >Shedule</p>
  <p>Drafts</p>
  <p>Expiring</p>
  <p>Expired</p> */}
                {contenetabslinkarray.map((value, key) => {
                  return (
                    <p
                      key={key}
                      id={value}
                      className={
                        secopmnavactiv == value
                          ? "contentabslinksactiv"
                          : "contentabslinks"
                      }
                      onClick={activnav}
                    >
                      {value}
                    </p>
                  );
                })}
              </div>
              <div className="contenttabsdiv">
                <Dropdown>
                  <Dropdown.Toggle
                    className="contentdropdowns"
                    variant="light"
                    id="dropdown-basic"
                  >
                    Post type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    className="contentdropdowns"
                    variant="light"
                    id="dropdown-basic"
                  >
                    Filter
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <p className="contentclearbtn">Clear</p>
                <div className="searchboxmaindiv">
                  <div className="searchboxdiv">
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
                      placeholder="Search by ID or catag..."
                      style={{ border: "none", outline: "none" }}
                    />
                  </div>
                  {/* <img src={searchiwala}/> */}
                  <i
                    className="fa fa-info-circle"
                    style={{ marginTop: "20px", marginLeft: "5px" }}
                  ></i>
                </div>
                <DatePickerInput
                  className="select-grey-color font-poppins contentdatepicker"
                  placeholder="Pick dates range"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  type="range"
                />
                <div className="columnsboxdiv">
                  <button className="columnsbtndiv">
                    <img
                      src={contentcolumn}
                      width={20}
                      style={{ marginRight: "5px" }}
                    />
                    Columns
                  </button>
                </div>
              </div>

              <Tabledetails
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Content;
