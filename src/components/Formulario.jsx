import React from 'react';

export function Formulario(props) {
    const [cliente, setCliente] = useState('');
    const [propina, setPropina] = useState(0.05);
    const [cuenta, setCuenta] = useState(null);
    const [personas, setPersonas] = useState(1);
    return (
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
        </div>
    );
}