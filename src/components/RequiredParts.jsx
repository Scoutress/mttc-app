import React, { useState } from "react";
import AllParts from "../storage/AllParts.js";
import Warehouse from "../storage/Warehouse.js";
import RepairData from "../storage/RepairData.js";

const RequiredParts = () => {
  const [requiredParts, setRequiredParts] = useState([
    {
      code: "",
      description: "",
      inStock: null,
      price: 0,
      quantity: 1,
      status: "-",
      action: "",
    },
  ]);

  const checkIfPartInRepair = (code) => {
    const repair = RepairData.find((repair) =>
      repair.parts.some((p) => p.code === code)
    );
    return repair ? "Remonte" : "-";
  };

  const handlePartCodeChange = (index, code) => {
    const updatedParts = [...requiredParts];
    updatedParts[index].code = code;

    const part = AllParts.find(
      (part) => part.code === updatedParts[index].code
    );

    const warehouse = Warehouse.find(
      (item) => item.code === updatedParts[index].code
    );

    if (part) {
      updatedParts[index].description = part.desc;
      updatedParts[index].price = part.price / 100;
      updatedParts[index].inStock = warehouse ? warehouse.quantity > 0 : false;
      updatedParts[index].status = checkIfPartInRepair(
        updatedParts[index].code
      );

      if (updatedParts[index].quantity > 0) {
        updatedParts[index].price =
          (part.price / 100) * updatedParts[index].quantity;
      }
    } else {
      updatedParts[index].description = "Detalė nerasta";
      updatedParts[index].inStock = null;
      updatedParts[index].price = 0;
      updatedParts[index].status = "-";
    }

    if (index === requiredParts.length - 1 && updatedParts[index].code) {
      updatedParts.push({
        code: "",
        description: "",
        inStock: null,
        price: 0,
        quantity: 1,
        status: "-",
        action: "",
      });
    }

    setRequiredParts(updatedParts);
  };

  const handleQuantityChange = (index, quantity) => {
    const requestedQuantity = parseInt(quantity, 10);
    if (isNaN(requestedQuantity) || requestedQuantity < 0) {
      return;
    }

    const updatedParts = [...requiredParts];
    const part = AllParts.find(
      (part) => part.code === updatedParts[index].code
    );

    const warehouse = Warehouse.find(
      (item) => item.code === updatedParts[index].code
    );

    if (requestedQuantity <= (warehouse ? warehouse.quantity : 0)) {
      updatedParts[index].quantity = requestedQuantity;
      updatedParts[index].status = "-";
      updatedParts[index].action = "Atnešti";
    } else {
      updatedParts[index].quantity = quantity;
      updatedParts[index].status = "Nėra sandėlyje";
      updatedParts[index].action = "Užsakyti";
    }

    if (part) {
      updatedParts[index].price = (part.price / 100) * requestedQuantity;
    }

    setRequiredParts(updatedParts);
  };

  const handleRemovePart = (index) => {
    const updated = requiredParts.filter((_, i) => i !== index);
    setRequiredParts(
      updated.length
        ? updated
        : [
            {
              code: "",
              description: "",
              inStock: null,
              price: 0,
              quantity: 1,
              status: "-",
              action: "",
            },
          ]
    );
  };

  const handleActionClick = (index, action) => {
    const updatedParts = [...requiredParts];
    updatedParts[index].action = action;

    if (action === "Atnešti") {
      updatedParts[index].status = "Laukiama";
    } else if (action === "Užsakyti") {
      updatedParts[index].status = "Užsakyta";
    }

    setRequiredParts(updatedParts);
  };

  const handleOrderAll = () => {
    const updatedParts = requiredParts.map((part) => {
      if (part.quantity > (part.inStock ? part.inStock : 0)) {
        part.status = "Užsakyta";
        part.action = "Užsakyti";
      }
      return part;
    });

    setRequiredParts(updatedParts);
  };

  const renderStockStatus = (inStock) => {
    return inStock ? (
      <span className="text-success">✔</span>
    ) : (
      <span className="text-danger">✘</span>
    );
  };

  return (
    <div>
      <h4>Reikalingos detalės</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Kodas</th>
            <th>Aprašymas</th>
            <th>Kiekis</th>
            <th>Kaina</th>
            <th>Sandėlyje</th>
            <th>Būsena</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {requiredParts.map((part, index) => (
            <tr key={index}>
              <td>
                <input
                  className="form-control"
                  value={part.code}
                  onChange={(e) => handlePartCodeChange(index, e.target.value)}
                />
              </td>
              <td>{part.description || "-"}</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={part.quantity || ""}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
              </td>
              <td>{part.price ? `${part.price.toFixed(2)} EUR` : "-"}</td>
              <td>{renderStockStatus(part.inStock)}</td>
              <td>{part.status && <span>{part.status}</span>}</td>
              <td>
                {part.action === "Atnešti" && (
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleActionClick(index, "Atnešti")}
                  >
                    Atnešti
                  </button>
                )}
                {part.action === "Užsakyti" && (
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleActionClick(index, "Užsakyti")}
                  >
                    Užsakyti
                  </button>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemovePart(index)}
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-warning" onClick={handleOrderAll}>
        Užsakyti viską
      </button>
    </div>
  );
};

export default RequiredParts;
