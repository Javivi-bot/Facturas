import React, { useState } from "react";
import "../App.css";
import { InovoiceForm } from "./invoice-form";

export const Componente1 = (props) => {
  const [receipt, setReceipt] = useState(null);
  const [receipts, setReceipts] = useState([]);

  function volver(){
    if(receipt){
      setReceipt(null)
    }
  }
  return receipt ? (
    <div>
      <InovoiceForm key={"edit-"+receipt.no} addReceipt={receipt => {
        console.log(receipt);
        setReceipts(receipts.concat(receipt))
      }} mode={"edit"} valuesToEdit={{
                client: receipt.client,
                total : receipt.total,
                tip: receipt.tip,
                people: receipt.people,
                establishment: receipt.establishment,
                no: receipt.no
            }} editReceipt={newValues => setReceipts([...receipts.filter(currentRecdipt => currentRecdipt.no !== receipt.no), {...receipt, ...newValues}])}
volver={volver}
            
            />

    </div>
    
  ) : (
    <div className="space-y-4">
        <InovoiceForm addReceipt={receipt => setReceipts(receipts.concat(receipt))} mode={"create"} /> 
      <div className="receiptsList">
          {receipts.map(receipt => (
              <div className="factura" 
                key={receipt.no} onClick={() => setReceipt(receipt)}>
                <p className="fecha"><strong>Fecha:</strong> {receipt.date}</p>
                <p><strong>Cliente: </strong> {receipt.client}</p>
                <p><strong>No. Factura:</strong> {receipt.no}</p>
                <p><strong>Total de cuenta: </strong> {Number(receipt.total)}</p>
                <p><strong>Establecimiento:</strong> {receipt.establishment}</p>
                <p><strong>Propina:</strong> {Number(receipt.tip) * 100}%</p>
                <p><strong>Personas:</strong> {Number(receipt.people)}</p>
              </div>
          ))}
      </div>
      
    </div>
  );
};
