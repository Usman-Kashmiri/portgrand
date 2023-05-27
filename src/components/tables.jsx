import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import AuthUser from "../Config/UserAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import thimg from '../assets/images/th.png'
const Tabledetails = (props) => {
  const navigate = useNavigate();
  const { setSelectedDate, selectedDate } = props;

  const { http, getToken } = AuthUser();
  const gtoken = getToken();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const formdata = new FormData();
    formdata.append("dateto", selectedDate[0]);
    formdata.append("datefrom", selectedDate[1]);
    http
      .post("content", formdata)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((e) => { });
  };
  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const DELETE = (id) => {
    Swal.fire({
      title: "Do you want to delete Content?",
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
          .post("deleteContent", formData)
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

  const portgrandsubtittle = "Port Grand Pakistan";

  const datepublished = [
    "1 May 05:54",
    "1 May 00:21",
    "30 April 20:50",
    "30 Aril 20:50",
  ];
  return (
    <Table responsive style={{ width: "auto" }}>
      <thead>
        <tr>
          <th scope="col" ></th>
          <th scope="col"  ></th>
          {/* <th scope="col"></th> */}
          <th scope="col" style={{
            width: '50%',
            textAlign: 'end',
            paddingRight: '40px',
          }}>
            Date published</th>
          <th scope="col">Reach</th>
          <th scope="col">Engagements</th>
          <th scope="col">Likes and reaction</th>
           {gtoken ? ( <th scope="col"> Delete</th>) :''}         
        </tr>
      </thead>
      <tbody>
        {data?.map((res, i) => {
          return (
            <tr key={i}>
              <td scope="row" colspan='2'>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                  style={{ width: "30px", height: "30px", marginTop: "25px" }}
                />
              </td>
              <td colspan='4'    >
                <img
                  src={res.image}
                  style={{
                    width: '100%',
                    borderRadius: "10px",
                    backgroundColor: "yellow",
                    display: "flex",
                    alignSelf: "center",
                    marginRight: "5px",
                  }}
                />


              </td>
              {gtoken ? (
                <td colspan='1' style={{ paddingTop: "30px" }}>
                  <span className="d-flex align-items-center gap-2">

                    <button
                      type="button"
                      onClick={() => DELETE(res.id)}
                      className="py-2 px-3 btn-grey border-0 rounded-3"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </span>
                </td>
              ) : ''}
            </tr>
          );
        })}
      </tbody>
    </Table >
  );
};

export default Tabledetails;
