import React from "react";
import AllParts from "../storage/AllParts";

const RepairInfo = ({ repair }) => {
  if (!repair) return null;

  const nonWarrantyPartsTotal = repair.addedParts.reduce((sum, part) => {
    const partDetails = AllParts.find((p) => p.code === part.code);
    return sum + (partDetails ? partDetails.price / 100 : 0);
  }, 0);

  const nonWarrantyWork = repair.addedParts.length > 0 ? 29.99 : 0;
  const totalNonWarranty = nonWarrantyPartsTotal + nonWarrantyWork;

  return (
    <div>
      <div className="mb-2">
        <strong>Remonto numeris:</strong> {repair.aaNumber}
      </div>
      {repair.type && (
        <div className="mb-2">
          <strong>Tipas:</strong> {repair.type}
        </div>
      )}
      {repair.subgroup && (
        <div className="mb-2">
          <strong>Pogrupis:</strong> {repair.subgroup}
        </div>
      )}
      {repair.model && (
        <div className="mb-2">
          <strong>Modelis:</strong> {repair.model}
        </div>
      )}
      {repair.supplierModel && (
        <div className="mb-2">
          <strong>Tiekėjo modelis:</strong> {repair.supplierModel}
        </div>
      )}
      {repair.newSupplierModel && (
        <div className="mb-2">
          <strong>Naujas tiekėjo modelis:</strong> {repair.newSupplierModel}
        </div>
      )}
      {repair.imei && (
        <div className="mb-2">
          <strong>IMEI:</strong> {repair.imei}
        </div>
      )}
      {repair.family && (
        <div className="mb-2">
          <strong>Šeima:</strong> {repair.family}
        </div>
      )}

      <div className="mb-2">
        <strong>Negarantinės detalės:</strong>{" "}
        {nonWarrantyPartsTotal.toFixed(2)} EUR
      </div>
      <div className="mb-2">
        <strong>Negarantinis darbas:</strong> {nonWarrantyWork.toFixed(2)} EUR
      </div>
      <div className="mb-2">
        <strong>Negarantinė suma:</strong> {totalNonWarranty.toFixed(2)} EUR
      </div>
      <div className="mb-2">
        <strong>Bendra suma:</strong> {totalNonWarranty.toFixed(2)} EUR
      </div>
    </div>
  );
};

export default RepairInfo;
