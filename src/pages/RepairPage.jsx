import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import RepairInfo from "./RepairInfo";
// import PartsReceiving from "./PartsReceiving";
// import RequiredParts from "./RequiredParts";
// import TechnicianActions from "./TechnicianActions";
// import allParts from "../storage/AllParts.js";
// import warehouse from "../storage/Warehouse.js";
// import actions from "../storage/Actions.js";

const RepairPage = () => {
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-md-6">
          Repair info
          {/* <RepairInfo /> */}
        </div>
        <div className="col-md-6">
          Parts Receiving
          {/* <PartsReceiving /> */}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          Required Parts
          {/* <RequiredParts /> */}
        </div>
        <div className="col-md-6 mb-4">
          Technician Actions
          {/* <TechnicianActions /> */}
        </div>
      </div>
    </div>
  );
};

export default RepairPage;
