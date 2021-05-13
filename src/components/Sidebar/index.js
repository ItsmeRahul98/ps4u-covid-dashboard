import React, { useState, useEffect } from "react";
import "./Sidebar.scss";

function Sidebar({ fullresp, setData, setselectedItem }) {
  const [selected, setSelected] = useState("oxygen");
  const [selectedIndex, setselectedIndex] = useState(0);
  return (
    <div className="sidebar">
      <ul>
        {Object.keys(fullresp).map((myList, index) => {
          return (
            <>
              <li>
                <a
                  onClick={() => {
                    setSelected(myList);
                    setselectedIndex(index);
                  }}
                  className={selected === myList ? "selected" : ""}
                >
                  {myList}
                </a>
                <ul
                  className={
                    selectedIndex === index ? "subMenu active" : "subMenu"
                  }
                >
                  {Object.keys(fullresp[myList]).map((subList, index) => {
                    return (
                      <li className="submenuLine">
                        <a
                          onClick={() => {
                            setData(fullresp[myList][subList]);
                            setselectedItem(subList);
                          }}
                          className={
                            subList === selectedIndex ? "selected" : ""
                          }
                        >
                          {subList}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
