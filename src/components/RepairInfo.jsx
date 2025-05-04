import React from "react";

const RepairInfo = ({ repair }) => {
  if (!repair) return null;

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
        <strong>Būsena:</strong> -
      </div>
      <div className="mb-2">
        <strong>Statusas:</strong> -
      </div>
      <div className="mb-2">
        <strong>Kliento komentaras:</strong> -
      </div>
      <div className="mb-2">
        <strong>Techniko komentaras:</strong> -
      </div>
      <div className="mb-2">
        <strong>Meistras:</strong> -
      </div>
    </div>
  );
};

export default RepairInfo;
