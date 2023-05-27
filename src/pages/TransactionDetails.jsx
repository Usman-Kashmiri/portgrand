import { Grid } from "@mantine/core";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import IconsSideNav from "../components/layout/IconsSideNav";
import { DatePickerInput } from "@mantine/dates";
import AuthUser from "../Config/UserAuth";
import CurrencyFormat from "react-currency-format";

const TransactionDetails = () => {
  const location = useLocation();

  const detail = location.state;
  const [inputVal, setInputVal] = useState({
    id: '',
    transaction_id: '',
    amount: '',
    payment_method_id: '',
    payment_status: '',
    dateFrom: '',
    dateTo: '',
    invoice_id: '',
    card_number: '',
    card_ref_number: '',
  })

  useEffect(() => {
    if (detail) {
      setInputVal({ ...inputVal, ...detail });

    }
  }, [detail]);


  const { http } = AuthUser();

  const [selectedDate, setSelectedDate] = useState(detail ? [new Date(detail?.dateFrom), new Date(detail?.dateTo)] : [
    new Date(2023, 4, 1),
    new Date(2023, 4, 7),
  ]);

  const dateFormat = 'DD MMMM YYYY';

  const handleChange = async (value) => {

    setSelectedDate(value);
    const formdata = new FormData();
    if (value[0] == null || value[1] == null) {
      return
    }
    formdata.append("datefrom", value[0]);
    formdata.append("dateto", value[1]);
    await http.post("paymentactivity", formdata)
      .then((res) => {

        let gg = res.data.data[0];
        setInputVal({ ...inputVal, ...gg });

      })
      .catch((e) => { });
  };

  return (
    <div
      className="custom-grid max-width-100vw"
      style={{ backgroundColor: "#f2f2f2" }}
    >
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
            className="bg-white rounded-3 shadow p-3 d-flex flex-column"
          >
            <span>Amount</span>
            <span className="fw-bold font-montserrat fs-2  ">

              <CurrencyFormat
                value={inputVal.amount}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={"Rs."}
              />
            </span>
            <span className="font-montserrat">
              <p className="m-0">
                Subtotal: &nbsp;
                <span className="fw-bold" >
                  <CurrencyFormat
                    value={inputVal.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={"Rs."}
                  />
                </span>
              </p>
              <p>Tax: <span className="fw-bold"> Rs.{inputVal?.tax || "0.00"}
              </span>
              </p>
            </span>
            <span>Billing reason</span>
            <span className="fw-bold">
              You're being billed because you've reached your billing threshold.
            </span>
          </Grid.Col>

          <Grid.Col
            span={5}
            className="bg-white rounded-3 shadow p-3 d-flex flex-column justify-content-between"
          >
            <Grid>
              <Grid.Col span={7} className="d-flex flex-column">
                <span>Transaction ID</span>
                <span className="fw-bold">{inputVal.transaction_id}</span>
              </Grid.Col>
              <Grid.Col span={5} className="d-flex flex-column">
                <span>Date</span>

                <DatePickerInput
                  valueFormat={dateFormat} // Set the desired date format
                  className="select-grey-color font-poppins contentdatepicker"
                  placeholder="Pick dates range"
                  value={selectedDate}
                  onChange={handleChange}
                  type="range"
                />

              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={7} className="d-flex flex-column">
                <span>Payment method</span>
                <span className="d-flex align-items-center gap-1">
                  <img
                    width={35}
                    src={inputVal?.payment_method_icon}
                    alt="payment type"
                  />
                  <span className="d-flex flex-column">
                    <span>
                      {inputVal?.payment_method} · {inputVal?.card_number}
                    </span>
                  </span>
                </span>
              </Grid.Col>
              <Grid.Col span={5} className="d-flex flex-column">
                <span>Reference number</span>
                <span>{inputVal?.card_ref_number}</span>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col
            span={3}
            className="bg-white rounded-3 shadow p-3 d-flex flex-column justify-content-between"
          >
            <Grid>
              <Grid.Col span={8} className="d-flex flex-column">
                <span>Ad account</span>
                <span className="fw-bold" style={{ fontSize: "14px" }}>
                  23842634005140183
                </span>
              </Grid.Col>
              <Grid.Col span={4} className="d-flex flex-column">
                <span>Product</span>
                <span>Facebook</span>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col
                span={5}
                className="d-flex flex-column align-items-start"
              >
                <span>Status</span>
                <span
                  style={{ fontSize: "14px" }}
                  className={
                    inputVal?.payment_status + "-status rounded-pill fw-bold"
                  }
                >
                  {inputVal?.payment_status}
                </span>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default TransactionDetails;
