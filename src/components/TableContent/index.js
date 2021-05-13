import React, { useState, useEffect } from "react";
import "./TableContent.scss";
import { Edit, Trash2 } from "react-feather";

function TableContent({ data, selectedItem, toggleModal }) {
  const getDeleteRow = (id) => {
    fetch(`http://3.128.167.221:3120/delete_leads`, {
      method: "POST",
      headers: [],
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const rowsItems = data.map((res, index) => (
    <>
      <ul className="tableContentRow">
        <li className="nameCol">{res.agency_name}</li>
        <li className="locationCol">
          {res.city === "nan" ? "-" : res.city},{" "}
          {res.state === "nan" ? "-" : res.state},{" "}
          {res.address === "nan" ? "-" : res.address}
        </li>
        <li className="contactCol">-</li>
        <li className="phoneCol">
          {res.phone_number === "nan" ? "-" : res.phone_number}
        </li>
        <li className="statusCol">
          {" "}
          {res.status === "nan" ? "-" : res.status}
        </li>
        <li className="verificationCol">
          <div className="verLine">
            <span className="blackTxt">By:</span>
            {res.verified_by === "nan" ? "-" : res.verified_by}
          </div>
          <div className="verLine">
            <span className="blackTxt">Date:</span>
            {res.verified_date_time}
          </div>
        </li>
        <li className="iconCol">
          <a className="iconEdit">
            <Edit />
          </a>
          <a className="iconDelete" onClick={() => {}}>
            <Trash2 />
          </a>
        </li>
      </ul>
    </>
  ));

  return (
    <section className="tableSec">
      <h2 className="subtitle">{selectedItem}</h2>
      <div className="tableDesign">
        <ul className="headerBar">
          <li className="nameHead">Name</li>
          <li className="locationHead">Location</li>
          <li className="contactHead">Contact Person</li>
          <li className="phoneHead">Phone Number</li>
          <li className="statusHead">Status</li>
          <li className="verificationHead">Verification</li>
          <li className="iconHead"></li>
        </ul>
        <div className="rowSection">{rowsItems}</div>
      </div>
    </section>
  );
}

export default TableContent;
