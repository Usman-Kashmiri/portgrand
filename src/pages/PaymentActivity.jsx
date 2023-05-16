import { Container, Grid, Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import React, { useState } from "react";
import IconsSideNav from "../components/layout/IconsSideNav";
import { selectOptions, selectOptions2 } from "../data/data";
import DataTable from "../components/layout/DataTable";

const PaymentActivity = () => {
  let [selectedDate, setSelectedDate] = useState([
    new Date(2023,0, 1),
    new Date(),
  ]);

  let [totalAmount, setTotalAmount] = useState(0);
  return (
    <div className="payment-activity custom-grid max-width-100vw">
      <IconsSideNav />

      {/* Main content */}

      <Container
        fluid
        className="bg-grey-color py-4 px-5 d-flex flex-column w-100"
      >
        <Grid className="justify-content-between">
          <Grid.Col span={3}>
            <span className="font-poppins fw-bold fs-5">Payment activity</span>
          </Grid.Col>
          <Grid.Col
            span={6}
            className="d-flex justify-content-end align-items-center gap-3"
          >
            <button className="btn-grey border-0 px-3 py-2 rounded-3 font-poppins">
              Payment Settings
            </button>
            <Select
              className="font-poppins"
              defaultValue={"113949522673653"}
              data={selectOptions}
            />
          </Grid.Col>
        </Grid>
        <Grid className="p-2 justify-content-between mt-4 bg-white rounded-container">
          <Grid.Col span={5} className="d-flex flex-column">
            <span className="font-poppins fs-7">ad account</span>
            <span className="font-poppins fw-bold fs-5">
              Port Grand (113949522673653)
            </span>
          </Grid.Col>
          <Grid.Col
            span={5}
            className="d-flex justify-content-end align-items-center gap-3"
          >
            <span className="d-flex flex-column">
              <span className="font-poppins fs-7 text-grey-color">
                current balance <i className="fa fa-info-circle"></i>
              </span>
              <span className="font-poppins fw-bold fs-5">Rs{totalAmount}</span>
            </span>
            <button className="btn-blue border-0 px-3 py-2 rounded-3 font-poppins">
              Pay now
            </button>
          </Grid.Col>
        </Grid>
        <Grid className="p-2 justify-content-between mt-4 bg-white rounded-container">
          <Grid.Col span={8} className="d-flex flex-column">
            <Grid className="align-items-center">
              <Grid.Col span={2}>
                <Select
                  className="select-grey-color font-poppins h-100"
                  defaultValue={"transactions"}
                  data={selectOptions2}
                />
              </Grid.Col>
              <Grid.Col span={1} className="d-flex justify-content-center">
                <span className="btn-light-grey py-2 px-3 rounded-3">
                  <i className="fa fa-add fs-5 fw-light"></i>
                </span>
              </Grid.Col>
              <Grid.Col span={6}>
                <span className="font-poppins">
                  Use filters to refine your search
                </span>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col
            span={3}
            className="d-flex justify-content-end align-items-center gap-3"
          >
            <DatePickerInput
              className="select-grey-color  font-poppins"
              placeholder="Pick dates range"
              value={selectedDate}
              onChange={setSelectedDate}
              type="range"
              
            />
          </Grid.Col>
        </Grid>
        <Grid className="justify-content-between mt-4 bg-white rounded-container">
          <Grid.Col
            span={12}
            className="border-bottom d-flex justify-content-end px-3 pt-3 pb-2"
          >
            <button className="btn-grey border-0 px-3 py-2 rounded-3">
              Download <i className="ms-2 fas fa-caret-down"></i>
            </button>
          </Grid.Col>
          <Grid.Col span={12} className="px-0">
            <DataTable setSelectedDate={setSelectedDate} selectedDate={selectedDate} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default PaymentActivity;
