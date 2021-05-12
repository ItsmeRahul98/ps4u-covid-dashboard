import React, { useState, useEffect } from "react";
import "./Sidebar.scss";

function Sidebar() {
  // const [data, setData] = useState([]);
  const [selected, setSelected] = useState("oxygen");
  const [collapse, setCollapsed] = useState(false);
  const [mainCat, setmainCat] = useState([]);
  const [subCat, setsubCat] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    fetch(`http://3.128.167.221:3120/get_all_leads`, {
      method: "POST",
      headers: [],
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setmainCat(Object.keys(response));
        console.log(
          Object.keys(response).map((item) => Object.keys(item.value2))
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="sidebar">
      <ul>
        {mainCat.map((myList) => (
          <li
            onClick={() => {
              setSelected(myList);
              setCollapsed(!collapse);
            }}
            className={selected === myList ? "selected" : ""}
          >
            {myList}
            {subCat.map((res) => (
              <li>{res}</li>
            ))}
          </li>
        ))}

        {/* <li
          onClick={() => {
            setSelected("oxygen");
            setCollapsed(!collapse);
          }}
          className={selected === "oxygen" ? "selected" : ""}
        >
          Oxygen
          <ul className={collapse ? "subMenu" : "subMenu active"}>
            <li className="submenuLine">Cylinder</li>
            <li className="submenuLine">Flowmeter</li>
            <li className="submenuLine">Refill</li>
            <li className="submenuLine">Concentrator</li>
          </ul>
        </li>
        <li
          onClick={() => {
            setSelected("Beds");
          }}
          className={selected === "Beds" ? "selected" : ""}
        >
          Beds
        </li>
        <li
          onClick={() => {
            setSelected("Homecare");
          }}
          className={selected === "Homecare" ? "selected" : ""}
        >
          Homecare Information
        </li>
        <li
          onClick={() => {
            setSelected("RT-PCR");
          }}
          className={selected === "RT-PCR" ? "selected" : ""}
        >
          RT-PCR Test Home
        </li>
        <li
          onClick={() => {
            setSelected("medicine");
          }}
          className={selected === "medicine" ? "selected" : ""}
        >
          Medicines
        </li>
        <li
          onClick={() => {
            setSelected("staples");
          }}
          className={selected === "staples" ? "selected" : ""}
        >
          staples
        </li>
       */}
      </ul>
    </nav>
  );
}

export default Sidebar;
