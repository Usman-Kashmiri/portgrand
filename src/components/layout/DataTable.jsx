import React from "react";
import { Table } from "@mantine/core";

const DataTable = () => {
  const data = [
    {
      transaction_id: "5496874737089675-11217159",
      date: "23 Apr 2023",
      amount: "Rs100,000.00",
      payment_method: "Mastercard 9046",
      payment_token: "9JY2AJ3542",
      payment_status: "Paid",
      invoice_id: "FBADS-054-102498564",
    },
    {
      transaction_id: "5980439912066484-12116887",
      date: "30 Apr 2023",
      amount: "Rs100,000.00",
      payment_method: "Mastercard 9046",
      payment_token: "826ELNT442",
      payment_status: "Paid",
      invoice_id: "FBADS-054-102287052",
    },
    {
      transaction_id: "5840263109417505-11039028",
      date: "7 May 2023",
      amount: "Rs90,000.00",
      payment_method: "Mastercard 9046",
      payment_token: "KLSACMK542",
      payment_status: "Paid",
      invoice_id: "FBADS-054-102443702",
    },
  ];

  const rows = data.map((item, i) => (
    <tr key={i}>
      <td width="15%" className="py-3 px-4 text-info font-poppins">
        {item.transaction_id}
      </td>
      <td className="py-3 px-4 font-poppins">{item.date}</td>
      <td className="py-3 px-4 font-poppins">{item.amount}</td>
      <td className="py-3 px-4 font-poppins">
        <span className="d-flex align-items-center gap-1">
          <img
            width={35}
            src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1313-j69pg4er.png"
            alt="mastercard"
          />
          <span className="d-flex flex-column">
            <span>{item.payment_method}</span>
            <span>{item.payment_token}</span>
          </span>
        </span>
      </td>
      <td className="py-3 px-4 font-poppins">
        <span className="paid-status rounded-pill">{item.payment_status}</span>
      </td>
      <td className="py-3 px-4 font-poppins">{item.invoice_id}</td>
      <td className="py-3 px-4">
        <button className="py-2 px-3 btn-grey border-0 rounded-3">
          <i className="fa fa-download"></i>
        </button>
      </td>
    </tr>
  ));

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
