import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import repairs from "../storage/RepairData.js";
import RepairInfo from "../components/RepairInfo.jsx";
import PartsReceiving from "../components/PartsReceiving.jsx";
// import RequiredParts from "./RequiredParts";
// import TechnicianActions from "./TechnicianActions";

const RepairPage = () => {
  const [aaInput, setAaInput] = useState("");
  const [selectedRepair, setSelectedRepair] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const found = repairs.find((r) => r.aaNumber === aaInput.trim());
    setSelectedRepair(found || null);
    setHasSearched(true);
  };

  return (
    <div className="container py-4">
      {!selectedRepair && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Įveskite remonto numerį"
            value={aaInput}
            onChange={(e) => setAaInput(e.target.value)}
            className="form-control d-inline-block w-auto me-2"
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Atidaryti
          </button>
          {hasSearched && !selectedRepair && (
            <p className="text-danger mt-2">
              Remontas su tokiu numeriu nerastas.
            </p>
          )}
        </div>
      )}

      {selectedRepair && (
        <>
          <div className="row mb-4">
            <div className="col-md-6">
              <RepairInfo repair={selectedRepair} />
            </div>
            <div className="col-md-6">
              <PartsReceiving aaNumber={selectedRepair.aaNumber} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              {/* <RequiredParts aaNumber={selectedRepair.aaNumber} /> */}
            </div>
            <div className="col-md-6 mb-4">
              {/* <TechnicianActions aaNumber={selectedRepair.aaNumber} /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RepairPage;
