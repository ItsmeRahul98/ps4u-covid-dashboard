import React, { useState } from "react";
import TableContent from "../../components/TableContent";
import Sidebar from "../../components/Sidebar";
import "./Home.scss";
import Button from "../../components/Button";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mainHome">
      <h1>PS Covid Dashboard</h1>
      <div className="btnGroup">
        <Button
          className="blue"
          title="Add Lead"
          onBtnClick={() => {
            setOpen(true);
          }}
        />
        <Button
          className="green"
          title="Download File"
          onBtnClick={(e) => {
            e.preventDefault();
            window.location.href =
              "http://3.128.167.221:3120/download_all_leads";
          }}
        />
      </div>

      <div className="mainContent">
        <Sidebar />
        <TableContent />
      </div>

      <Modal
        center
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
}

export default Home;
