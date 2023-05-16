import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import AuthUser from "../../Config/UserAuth";
const DataTable = (props) => {

  let { selectedDate, setSelectedDate, setTotalAmount,totalAmount } = props;
  const { http } = AuthUser();

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const formdata = new FormData();
    formdata.append('dateto', selectedDate[0])
    formdata.append('datefrom', selectedDate[1])
    http.post('paymentactivity', formdata).then((res) => {
      setData(res.data.data)
      setTotalAmount('--')
    }).catch((e) => {

    })
  }
  useEffect(() => {
    fetchData();
  }, [selectedDate]);
  let newtotalAmount = 0;

  const rows = (data.length > 0 ? (data.map((item, i) => {
    newtotalAmount = (parseFloat(item.amount) + parseFloat(newtotalAmount))
    console.log(newtotalAmount)
    setTotalAmount(newtotalAmount);
    return (
      <tr key={i}>
        <td width="15%" className="py-3 px-4 text-info font-poppins">
          {item.transaction_id}
        </td>
        <td className="py-3 px-4 font-poppins">{item.date}</td>
        <td className="py-3 px-4 font-poppins">Rs {item.amount}</td>
        <td className="py-3 px-4 font-poppins">
          <span className="d-flex align-items-center gap-1">
            <img
              width={35}
              src={item.payment_method_icon}
              alt="mastercard"
            />
            <span className="d-flex flex-column">
              <span>{item.payment_method}</span>
              <span>{item.payment_token}</span>
            </span>
          </span>
        </td>
        <td className="py-3 px-4 font-poppins d-flex align-items-center justify-content-center">
          <span className={item.payment_status + '-status rounded-pill'}>{item.payment_status}</span>

        </td>
        <td className="py-3 px-4 font-poppins">{item.invoice_id}</td>
        <td className="py-3 px-4">
          <button className="py-2 px-3 btn-grey border-0 rounded-3">
            <i className="fa fa-download"></i>
          </button>
        </td>
      </tr>
    )
  })) : ('no data found'));

  return (
    <Table>
      <thead>
        <tr>
          <th className="py-3 px-4">Transaction ID</th>
          <th className="py-3 px-4">
            Date <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="py-3 px-4">
            Amount <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="py-3 px-4">
            Payment method <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="py-3 px-4">
            Payment status <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="py-3 px-4">
            VAt invoice ID <i className="text-grey-color fa fa-info-circle"></i>
          </th>
          <th className="py-3 px-4">Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default DataTable;
