import React, { useState, useEffect } from "react";
import TableContent from "../../components/TableContent";
import Sidebar from "../../components/Sidebar";
import "./Home.scss";
import Button from "../../components/Button";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";

function Home({ toggleModal }) {
  const [modalOpen, setmodalOpen] = useState(false);
  const [deleteModal, setdeleteModal] = useState();
  const [data, setData] = useState([]);
  const [fullresp, setFullresp] = useState([]);
  const [selectedItem, setselectedItem] = useState("Oxygen Cylinder");
  const [age, setAge] = useState("");
  const [agencyName, setagencyName] = useState("");
  const [contactPer, setcontactPer] = useState("");
  const [phoneNum, setphoneNum] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [mainAdd, setmainAdd] = useState("");
  const [statusVer, setstatusVer] = useState("verified");
  const [verifiedBy, setverifiedBy] = useState("");
  const [verifiedDate, setverifiedDate] = useState("");
  const [comments, setcomments] = useState("");

  useEffect(() => {
    getDataList();
  }, []);

  const getDataList = () => {
    fetch(`http://3.128.167.221:3120/get_all_leads`, {
      method: "POST",
      headers: [],
    })
      .then((res) => res.json())
      .then((response) => {
        setFullresp(response);
        setData(response["Oxygen Supplies"]["Oxygen Cylinder"]);
      })
      .catch((error) => console.log(error));
  };

  const addData = () => {
    fetch(`http://3.128.167.221:3120/create_leads`, {
      method: "POST",
      headers: [],
      body: JSON.stringify({
        resource_type: "staples",
        resource_sub_type: "mixed",
        agency_name: agencyName,
        contact_person: contactPer,
        phone_number: phoneNum,
        state: state,
        city: city,
        address: mainAdd,
        status: statusVer,
        verified_by: verifiedBy,
        comments: comments,
        verified_date_time: verifiedDate,
        submitted_date_time: new Date(),
        relevantCount: 1.0,
        irrelevantCount: 0.0,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="mainHome">
      <h1>PS Covid Dashboard</h1>
      <div className="btnGroup">
        <Button
          className="blue"
          title="Add Lead"
          onBtnClick={() => {
            setmodalOpen(true);
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
        <Sidebar
          fullresp={fullresp}
          setData={(data) => setData(data)}
          setselectedItem={(item) => setselectedItem(item)}
        />
        <TableContent data={data} selectedItem={selectedItem} />
      </div>

      <Modal
        center
        open={modalOpen}
        onClose={() => {
          setmodalOpen(false);
        }}
      >
        <div className="modalMain">
          <form>
            <h2 className="modalTitle">Create Lead</h2>
            <div className="modalRow">
              <div>
                <FormControl>
                  <Select
                    value={age}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {Object.keys(fullresp).map((myList) => {
                      return (
                        <>
                          <MenuItem value={myList}>{myList}</MenuItem>
                        </>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl>
                  <Select
                    value={age}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {Object.keys(fullresp).map((myList) => {
                      return (
                        <>
                          <MenuItem value={myList}>{myList}</MenuItem>
                        </>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>

            <label>Agency Name*</label>
            <TextField
              fullWidth
              required
              id="standard-required"
              value={agencyName}
              onChange={(e) => {
                setagencyName(e.target.value);
              }}
            />
            <div className="modalRow">
              <label>Contact Person*</label>
              <TextField
                value={contactPer}
                onChange={(e) => {
                  setcontactPer(e.target.value);
                }}
                required
                id="standard-required"
              />
              <label>Phone Number*</label>
              <TextField
                id="standard-number"
                type="number"
                value={phoneNum}
                onChange={(e) => {
                  setphoneNum(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="modalRow">
              <h4 className="subtitle">Address</h4>
              <div className="addressRow">
                <div className="state">
                  <label>State*</label>
                  <TextField
                    value={state}
                    onChange={(e) => {
                      setstate(e.target.value);
                    }}
                    required
                    id="standard-required"
                  />
                </div>
                <div className="city">
                  <label>City*</label>
                  <TextField
                    value={city}
                    onChange={(e) => {
                      setcity(e.target.value);
                    }}
                    required
                    id="standard-required"
                  />
                </div>
              </div>
              <label>Main Address*</label>
              <TextField
                id="standard-multiline-static"
                multiline
                rows={2}
                fullWidth
                value={mainAdd}
                onChange={(e) => {
                  setmainAdd(e.target.value);
                }}
              />
            </div>
            <div className="modalRow">
              <h4 className="subtitle">Status</h4>
              <div className="radioGroup">
                <RadioGroup
                  aria-label="verified"
                  name="verified"
                  value={statusVer}
                  onChange={(e) => {
                    setstatusVer(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="Verified"
                    control={<Radio color="primary" />}
                    label="Verified"
                  />
                  <FormControlLabel
                    value="notVerified"
                    control={<Radio />}
                    label="Not Verified"
                  />
                </RadioGroup>
              </div>
              <div className="modalRow">
                <h4 className="subtitle">Verification</h4>
                <label>Verified By*</label>
                <TextField
                  value={verifiedBy}
                  onChange={(e) => {
                    setverifiedBy(e.target.value);
                  }}
                  required
                  fullWidth
                  id="standard-required"
                />
                <label>Verification Date</label>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue={new Date()}
                  value={verifiedDate}
                  onChange={(e) => {
                    setverifiedDate(e.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="modalRow">
                <label>Comments*</label>
                <TextField
                  value={comments}
                  onChange={(e) => {
                    setcomments(e.target.value);
                  }}
                  fullWidth
                  id="standard-required"
                />
              </div>
              <div className="btnGroup">
                <Button
                  className="blue"
                  title="Create"
                  onBtnClick={() => {
                    addData();
                  }}
                />
                <Button
                  className="cancel"
                  title="Cancel"
                  onBtnClick={() => {
                    setmodalOpen(false);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        center
        isOpen={deleteModal}
        toggleModal={() => {
          setdeleteModal(false);
        }}
      >
        <div className="modalMain">
          <form>
            <h2 className="modalTitle">Delete Lead</h2>
            <div className="modalRow">
              <h4 className="deleteMsg">
                Are you sure want to delete this lead ?
              </h4>
              <div className="btnGroup">
                <Button className="red" title="Delete" onBtnClick={() => {}} />
                <Button
                  className="cancel"
                  title="Cancel"
                  onBtnClick={() => {
                    setmodalOpen(false);
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
