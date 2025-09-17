import React, { useState } from 'react';
import "../App.css";

//PROPS: 
// {
//      mode: "edit" | "create"
//      addReceipt: (receipt) => void;
//      editReceipt: (receiptId, editedReceipt) => void;
//      valuesToEdit: {
//          client: string;
//          tip: number;
//          total: number | null;
//          people: number
//      }
// }


export const InovoiceForm = (props) => {

  const [client, setClient] = useState(props.valuesToEdit?.client ?? '');
  const [tip, setTip] = useState(props.valuesToEdit?.tip ?? 0.05);
  const [total, setTotal] = useState(props.valuesToEdit?.total ?? null);
  const [people, setPeople] = useState(props.valuesToEdit?.people ?? 1);
  const [establishment, setEstablishment] = useState(props.valuesToEdit?.establishment ?? '');
  const [no, setNo] = useState(props.valuesToEdit?.no ?? '');

  const comprobar = client === "" || isNaN(total) || people < 1 || total === "" || +total < 1;

  function verificarGuardado() {
    
    if (comprobar) {
      document.getElementById("volver").style.display = "none";
      alert("Ningun campo puede quedar vacio");
    } else if (!comprobar) {
      document.getElementById("volver").style.display = "inline-block";
    }
  }

  props.editReceipt?.({ people, tip, total, client, establishment, no });


  const propinaTotal = +total * +tip;
  const propinaPorPersona = +propinaTotal / people;
  const totalGeneral = +total + propinaTotal;
  const totalPorPersona = totalGeneral / people;


  function onCalculateClick() {
    if (client === "" || isNaN(total) || people < 1 || total === "" || +total === 0) {
      alert("Ingresa valores validos")
    } else {

      const receiptNumber = Math.floor(Math.random() * 100000);
      const today = new Date();
      const localizedDate = today.toLocaleDateString();


      props.addReceipt({ no: receiptNumber + "ABC", establishment: "The Velvet", client: client, tip: tip, total: total, people: people, date: localizedDate })
    }

  }

  function onResetClick() {
    setClient('')
    setTotal('')
    setTip(0.05)
    setPeople(1)
  }

  return (
    <>
      {props.mode === "create" ? <>


      </> : (<>
        <h1>Factura a nombre de <strong>{client}</strong></h1>
        <strong>Establecimiento: </strong>{establishment}<br />
        <strong>Numero de la factura: </strong> {no}<br />
        <strong>Porcentaje de la propina: </strong> {tip * 100} %<br />
        <strong>Cantidad de personas al dividir la cuenta: </strong> {people}<br />


        <h3>Resultados: </h3>
        <table border="1">
          <thead>
            <tr>
              <th>Total de la cuenta</th>
              <th>Propina total</th>
              <th>Propina por persona</th>
              <th>Total por persona</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{total}</td>
              <td>{propinaTotal.toFixed(2)}</td>
              <td>{propinaPorPersona.toFixed(2)}</td>
              <td>{totalPorPersona.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <h1>Seccion Editar</h1>

      </>)
      }

      <div className='no-print'>
        <div>
          <label htmlFor="nombre_cliente" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre del cliente:
          </label>
          <input
            type="text"
            id="nombre_cliente"
            value={client}
            onChange={(e) => setClient(e.target.value)}
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
            value={tip}
            onChange={(e) => setTip(e.target.value)}
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
            value={total}
            onChange={(e) => setTotal(e.target.value)}
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
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            step="0.01"
            min="0"
          />
        </div>


        {props.mode === "create" ? <>

          <button
            type="button"
            onClick={onCalculateClick}
            className="boton"
          >
            Generar
          </button>

          <button
            type="button"
            onClick={onResetClick}
            className="boton"
          >
            Reiniciar
          </button></> : <>

          <button type="button" id="volver" onClick={() => { props.volver?.() }} className="boton">
            Volver
          </button>

          <button type="button" onClick={verificarGuardado} className="boton">
            Guardar Cambios
          </button>

        </>}
      </div>
    </>
  )
}

