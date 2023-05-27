import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import AuthUser from "../../Config/UserAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import CurrencyFormat from "react-currency-format";

const DataTable = (props) => {
  const navigate = useNavigate();

  let { selectedDate, setSelectedDate, setTotalAmount, totalAmount } = props;
  const { http, getToken } = AuthUser();
  const gtoken = getToken();

  const [data, setData] = useState([]);
  const fetchData = async () => {
    if (selectedDate[0] == null || selectedDate[1] == null) {
      return
    }
    const formdata = new FormData();
    formdata.append("datefrom", selectedDate[0]);
    formdata.append("dateto", selectedDate[1]);
    http
      .post("paymentactivity", formdata)
      .then((res) => {
        setData(res.data.data);
        setTotalAmount("--");
      })
      .catch((e) => { });
  };
  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const DELETE = (id) => {
    Swal.fire({
      title: "Do you want to delete Transaction?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      icon: "warning",
      customClass: {
        actions: "my-actions",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        let formData = new FormData();
        formData.append("id", id);
        await http
          .post("deletepaymentactivity", formData)
          .then((res) => {
            console.log(res.data.status);
            if (res.data.status == "success") {
              Swal.fire({
                title: "Success ",
                text: "Delete successfully",
                icon: "success",
                button: "Ok",
              });

              fetchData();
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Warning!",
              text: "Delete not successfully",
              icon: "danger",
              button: "Ok",
            });
          });
      }
    });
  };

  let newtotalAmount = 0;

  const rows =
    data.length > 0
      ? data.map((item, i) => {
        if (item.payment_status !== 'Paid') {
          newtotalAmount = parseFloat(item.amount) + parseFloat(newtotalAmount);
          setTotalAmount(newtotalAmount);
        }
        return (
          <tr key={i}>
            <td
              width="15%"
              className="p-3 text-info font-poppins cursor-pointer"
              onClick={() =>
                navigate("/transaction-details", { state: item })
              }
            >
              {item.transaction_id}
            </td>
            <td className="p-3 font-poppins">
              {dayjs(item.dateTo).format("DD MMM YYYY")}
            </td>
            <td className="p-3 font-poppins">
              <CurrencyFormat
                value={item.amount}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={"Rs."}
              />
            </td>
            <td className="p-3 font-poppins">
              <span className="d-flex align-items-center gap-1">
                <img
                  width={35}
                  src={item.payment_method_icon}
                  alt="payment type"
                />
                <span className="d-flex flex-column">
                  <span>
                    {item.payment_method} · {item?.card_number}

                  </span>
                  <span>{item.card_ref_number}</span>
                </span>
              </span>
            </td>
            <td className="p-3 font-poppins d-flex align-items-center justify-content-center">
              <span className={item.payment_status + "-status rounded-pill"}>
                {item.payment_status}
              </span>
            </td>
            <td className="p-3 font-poppins">{item.invoice_id}</td>
            <td className="p-3">
              <span className="d-flex align-items-center gap-2">
                <button className="py-2 px-3 btn-grey border-0 rounded-3">
                  <i className="fa fa-download"></i>
                </button>
                {gtoken ? (<>
                  <button
                    type="button"
                    onClick={() => navigate("/update-payment", { state: item })}
                    className="py-2 px-3 btn-grey border-0 rounded-3"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => DELETE(item.id)}
                    className="py-2 px-3 btn-grey border-0 rounded-3"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </>) : ''}
              </span>
            </td>
          </tr>
        );
      })
      : (<p> <center>No data found</center></p>);

  return (
    <Table className="dataTable">
      <thead className="position-sticky top-0 bg-white">
        <tr className="bg-white">
          <th className="p-3">Transaction ID</th>
          <th className="p-3">
            Date <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="p-3">
            Amount <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="p-3">
            Payment method <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="p-3">
            Payment status <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="p-3">
            VAt invoice ID <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="p-3">Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default DataTable;
