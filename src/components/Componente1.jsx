import React, { useState } from "react";
import "../App.css";

export const Componente1 = () => {
  const [cliente, setCliente] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [receipts, setReceipts] = useState([]);
  const [propina, setPropina] = useState(0.05);
  const [cuenta, setCuenta] = useState(null);
  const [personas, setPersonas] = useState(1);
  
  const propinaTotal = cuenta * propina;
  const propinaPorPersona = propinaTotal / personas;
  const totalGeneral = cuenta + propinaTotal;
  const totalPorPersona = totalGeneral / personas;

  function calcular() {
    if(cliente === "" || isNaN(cuenta) || personas < 1 || cuenta ===""){
        alert("Ingresa valores validos")
        return;
    }

    const receiptNumber = Math.floor(Math.random() * 100000);
    const hoy = new Date();
    const fechaLocal = hoy.toLocaleDateString();
  

    setReceipts(receipts.concat({ no: receiptNumber + "ABC", establecimiento: "The Velvet", cliente: cliente, propina: propina, cuenta: cuenta, personas: personas, fecha: fechaLocal}))
  
  }

  function reiniciar(){
    setCliente('')
    setCuenta('')
    setPropina(0.05)
  }

  function volver(){
    if(receipt){
      setReceipt(null)
    }
  }

  return receipt ? (
    <div>
      <h1>Factura a nombre de {receipt.cliente}</h1>
      <strong>Establecimiento</strong>: {receipt.establecimiento}<br />
      <strong>Numero de la factura</strong>: {receipt.no}<br />
      <strong>Porcentaje de la propina</strong>: {receipt.propina*100} %<br />
      <h3>Resultados: </h3>
      <p>Total de la cuenta: {receipt.cuenta}</p><br />
      <p>Propina total: {propinaTotal.toFixed(2)}</p><br />
      <p>Total de la cuenta: {propinaPorPersona.toFixed(2)}</p><br />
      <p>Total de la cuenta: {totalPorPersona.toFixed(2)}</p><br />

      <button type="button" onClick={volver} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors">
        Volver
      </button>
    </div>
    
  ) : (
    <div className="space-y-4">
      <div>
        <label htmlFor="nombre_cliente" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del cliente: 
        </label>
        <input
          type="text"
          id="nombre_cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          step="0.01"
          min="0"
        />
      </div>

      <div>
        <label htmlFor="propina" className="block text-sm font-medium text-gray-700 mb-1">
          Porcentaje de propina:
        </label>
        <select
          id="propina"
          value={propina}
          onChange={(e) => setPropina(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="0.05">5%</option>
          <option value="0.10">10%</option>
          <option value="0.15">15%</option>
          <option value="0.20">20%</option>
        </select>
      </div>

      <div>
        <label htmlFor="totalCuenta" className="block text-sm font-medium text-gray-700 mb-1">
          Total de la cuenta: 
        </label>
        <input 
          type="number" 
          id="cuenta"
          value={cuenta}
          onChange={(e) => setCuenta(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          step="0.01"
          min="0"
        />
      </div>

      <div>
        <label htmlFor="personas" className="block text-sm font-medium text-gray-700 mb-1">
          Personas que dividen la cuenta: 
        </label>
        <input 
          type="number" 
          id="personas"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          step="0.01"
          min="0"
        />
      </div>
      

      <button
        type="button"
        onClick={calcular}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors"
      >
        Generar
      </button><br />

      <button
        type="button"
        onClick={reiniciar}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors"
      >
        Reiniciar
      </button><br />
      
      <div className="receiptsList">
          {receipts.map(receipt => (
              <div className="factura" 
                key={receipt.no} onClick={() => setReceipt(receipt)}>
                <p className="fecha"><strong>Fecha:</strong> {receipt.fecha}</p>
                <p><strong>Cliente: </strong> {receipt.cliente}</p>
                <p><strong>No. Factura:</strong> {receipt.no}</p>
                <p><strong>Total de cuenta: </strong> {Number(receipt.cuenta)}</p>
                <p><strong>Establecimiento:</strong> {receipt.establecimiento}</p>
                <p><strong>Propina:</strong> {Number(receipt.propina) * 100}%</p>
                <p><strong>Personas:</strong> {receipt.personas}</p>
              </div>
          ))}
      </div>
      
    </div>
  );
};
