import React from "react";
import "./TableContent.scss";
import { Edit, Trash2 } from "react-feather";

function TableContent() {
  return (
    <section className="tableSec">
      <h2 className="subtitle">Oxygen</h2>
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
        <div className="rowSection">
          <ul className="tableContentRow">
            <li className="nameCol">
              OXY99- Portable Oxygen Can, Medical Oxygen Cylinders
            </li>
            <li className="locationCol">
              67, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122001
            </li>
            <li className="contactCol">-</li>
            <li className="phoneCol">96508 04044</li>
            <li className="statusCol">Verified</li>
            <li className="verificationCol">
              <div className="verLine">
                <span className="blackTxt">By:</span>
                Nupur Gupta's friend
              </div>
              <div className="verLine">
                <span className="blackTxt">Date:</span>
                22:30:00
              </div>
              <div className="verLine">
                <span className="blackTxt">Time:</span>
                12/5/2021
              </div>
            </li>
            <li className="iconCol">
              <a className="iconEdit">
                <Edit />
              </a>
              <a className="iconDelete">
                <Trash2 />
              </a>
            </li>
          </ul>

          <ul className="tableContentRow">
            <li className="nameCol">Covid -19 medicines</li>
            <li className="locationCol">Delhi</li>
            <li className="contactCol">-</li>
            <li className="phoneCol">011-22393705</li>
            <li className="statusCol">-</li>
            <li className="verificationCol">
              <div className="verLine">
                <span className="blackTxt">By:</span>-
              </div>
              <div className="verLine">
                <span className="blackTxt">Date:</span>
                22:30:00
              </div>
              <div className="verLine">
                <span className="blackTxt">Time:</span>
                2021-05-10
              </div>
            </li>
            <li className="iconCol">
              <a className="iconEdit">
                <Edit />
              </a>
              <a className="iconDelete">
                <Trash2 />
              </a>
            </li>
          </ul>

          <ul className="tableContentRow">
            <li className="nameCol">Ambika Sirji Care</li>
            <li className="locationCol">Dwarka</li>
            <li className="contactCol">R N Mishra</li>
            <li className="phoneCol">7947210671</li>
            <li className="statusCol">Verified</li>
            <li className="verificationCol">
              <div className="verLine">
                <span className="blackTxt">By:</span>
                Nupur Gupta's friend
              </div>
              <div className="verLine">
                <span className="blackTxt">Date:</span>
                22:30:00
              </div>
              <div className="verLine">
                <span className="blackTxt">Time:</span>
                12/5/2021
              </div>
            </li>
            <li className="iconCol">
              <a className="iconEdit">
                <Edit />
              </a>
              <a className="iconDelete">
                <Trash2 />
              </a>
            </li>
          </ul>
          {/* 
          <ul className="tableContentRow">
            <li className="nameCol">Ambika Sirji Care</li>
            <li className="locationCol">Dwarka</li>
            <li className="contactCol">R N Mishra</li>
            <li className="phoneCol">7947210671</li>
            <li className="statusCol">Verified</li>
            <li className="verificationCol">
              <div className="verLine">
                <span className="blackTxt">By:</span>
                Nupur Gupta's friend
              </div>
              <div className="verLine">
                <span className="blackTxt">Date:</span>
                22:30:00
              </div>
              <div className="verLine">
                <span className="blackTxt">Time:</span>
                12/5/2021
              </div>
            </li>
            <li className="iconCol">
              <a className="iconEdit">
                <Edit />
              </a>
              <a className="iconDelete">
                <Trash2 />
              </a>
            </li>
          </ul>
         */}
        </div>
      </div>
    </section>
  );
}

export default TableContent;
