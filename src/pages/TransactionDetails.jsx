import { Grid } from "@mantine/core";
import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import IconsSideNav from "../components/layout/IconsSideNav";

const TransactionDetails = () => {
  const location = useLocation();

  const detail = location.state;

  console.log(detail);

  return (
    <div className="custom-grid max-width-100vw">
      <IconsSideNav />
      <Container className="px-5 py-4">
        <Grid className="justify-content-between">
          <Grid.Col
            span={6}
            className="breadcrumbs d-flex align-content-center gap-2"
          >
            <span className="first-child font-poppins">Payment activity</span>
            <span className="angular-bracket">
              <i className="fa fa-angle-right"></i>
            </span>
            <span className="last-child font-poppins">Transaction details</span>
          </Grid.Col>
          <Grid.Col
            span={4}
            className="d-flex justify-content-end align-items-center"
          >
            <span className="bg-white font-poppins py-2 px-3 rounded-1 border">
              Port Grand (113949522673653)
            </span>
          </Grid.Col>
        </Grid>
        <Grid className="mt-5 justify-content-between">
          <Grid.Col span={4}>
            <h2>Transaction details</h2>
          </Grid.Col>
          <Grid.Col span={4} className="d-flex justify-content-end">
            <button className="btn btn-primary font-poppins fw-bold">
              <i className="me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  width={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </i>
              Download PDF
            </button>
          </Grid.Col>
        </Grid>
        <Grid className="justify-content-between gap-3 mt-4 px-2">
          <Grid.Col
            span="auto"
            className="bg-white rounded-3 shadow-sm p-3 d-flex flex-column"
          >
            <span>Amount</span>
            <span className="fw-bold font-montserrat fs-2 ps-3">
              Rs.{detail.amount}
            </span>
            <span className="font-montserrat">
              Subtotal: &nbsp;
              <span className="fw-bold">Rs.{detail.amount}</span>
              &nbsp; Tax:{" "}
              <span className="fw-bold">Rs.{detail?.tax || "0.00"}</span>
            </span>
            <span>Billing reason</span>
            <span className="fw-bold">
              You're being billed because you've reached your billing threshold.
            </span>
          </Grid.Col>
          <Grid.Col span={5} className="bg-white rounded-3 shadow-sm p-3">
            <Grid>
              <Grid.Col span={7} className="d-flex flex-column">
                <span>Transaction ID</span>
                <span>{detail.transaction_id}</span>
              </Grid.Col>
              <Grid.Col span={4} className="d-flex flex-column">
                <span>Date</span>
                <span className="px-3 py-2" style={{background:'#f1f1f3'}}>{detail.date}</span>
              </Grid.Col>
            </Grid>
            <Grid.Col span={7}></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
          </Grid.Col>
          <Grid.Col
            span={3}
            className="bg-white rounded-3 shadow-sm p-3"
          ></Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default TransactionDetails;
