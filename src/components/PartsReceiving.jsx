import React from "react";
import repairs from "../storage/RepairData";

const PartsReceiving = ({ aaNumber }) => {
  const repair = repairs.find((r) => r.aaNumber === aaNumber);

  if (!repair || !repair.addedParts || repair.addedParts.length === 0) {
    return <p>Detalių nerasta šiam remontui.</p>;
  }

  return (
    <div>
      <h4>Priimtos detalės</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Kodas</th>
            <th>Pavadinimas</th>
            <th>Data</th>
            <th>Veiksmas</th>
          </tr>
        </thead>
        <tbody>
          {repair.addedParts.map((part, index) => (
            <tr key={index}>
              <td>{part.code}</td>
              <td>{part.desc}</td>
              <td>{part.date}</td>
              <td>
                <button className="btn btn-primary btn-sm">Priimti</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary">Priimti viską</button>
    </div>
  );
};

export default PartsReceiving;
