// import { Container, Grid, Select } from "@mantine/core";
import { Container, Grid, Select } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import React, { useState } from "react";
import IconsSideNav from "../components/layout/IconsSideNav";
import { selectOptions } from "../data/data";

const PaymentActivity = () => {
  const [selectedDate, setSelectedDate] =
    useState([new Date(2021, 11, 1), new Date(2021, 11, 5)]);
//   const [value, setValue] = useState(new Date());

  return (
    <div className="custom-grid max-width-100vw">
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
              searchable
              clearable
              defaultValue={"113949522673653"}
              data={selectOptions}
            />
          </Grid.Col>
        </Grid>
        <Grid className="p-2 justify-content-between mt-4 bg-white shadow-sm rounded-2">
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
              <span className="font-poppins fw-bold fs-5">Rs4,163.63</span>
            </span>
            <button className="btn-blue border-0 px-3 py-2 rounded-3 font-poppins">
              Pay now
            </button>
          </Grid.Col>
        </Grid>
        <Grid className="p-2 justify-content-between mt-4 bg-white shadow-sm rounded-2">
          <Grid.Col span={6} className="d-flex flex-column">
            <span className="font-poppins fs-7">ad account</span>
            <span className="font-poppins fw-bold fs-5">
              Port Grand (113949522673653)
            </span>
          </Grid.Col>
          <Grid.Col
            span={4}
            className="d-flex justify-content-end align-items-center gap-3"
          >
            <DateRangePicker
              placeholder="Pick dates range"
              value={selectedDate}
              onChange={setSelectedDate}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default PaymentActivity;
