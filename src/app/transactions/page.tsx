'use client'
import { Subtitle, Title } from "../components/header/Texts";
import { ContainerMain } from "../hooks/ContainerMain";
import { API_BASE_URL } from "../lib/constants";
import Cookies from "js-cookie"

import { useEffect, useState } from "react";
import { TransactionDto } from "../types/Transaction";
import { Card } from "./components/Card";

function formatTransactions(transactions: TransactionDto[]): TransactionDto[] {
  return transactions.map((transaction) => {
    // Parsear la fecha y formatearla
    const dateObj = new Date(transaction.date);
    const formattedDate = `${dateObj.toLocaleDateString("en-CA")} ${dateObj.toLocaleTimeString("en-US")}`;

    return {
      ...transaction,
      date: formattedDate, // Sobrescribir la fecha formateada
    };
  });
}

export default function HomePage() {
  const [transactions, setTransactions] = useState<TransactionDto[]>([])
  async function getList() {
    try {
      // Suponiendo que el token se guarda en localStorage o en un estado
      const token = Cookies.get("authToken");// o donde sea que guardes tu token
      console.log(token)
      const result = await fetch(`${API_BASE_URL}/transactions?user_id=1`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Pasa el token en el header
        },
        credentials: 'include' // Esto sigue siendo necesario si estás utilizando cookies para autenticar
      });
      if (!result.ok) {
        throw new Error('Error en la petición')
      }
      const data = await result.json()
      console.log(data)
      // Formatear los datos
      const formattedData = formatTransactions(data);
      console.log('format-->', formattedData);
      setTransactions(formattedData);

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getList()
  }, [])
  return (
    <ContainerMain>
      <Title title='Gestión de Transacciones' />
      <div className="mt-4">
        <Subtitle subtitle="Administre sus ingresos y gastos" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="relative col-span-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 19l-3.5-3.5M15.5 15.5a7 7 0 1 0-10 0 7 7 0 0 0 10 0z"></path>
            </svg>
            <input
              type="text"
              placeholder="Buscar transacciones..."
              className="pl-10 bg-gray-800/50 border text-sm border-gray-700 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-400 rounded-md w-full py-2"
            />
          </div>
          <div className="relative">
            <select className="bg-gray-800/50 border text-sm border-gray-700 text-gray-100 rounded-md w-full px-2 py-2">
              <option disabled selected>Filtrar por período</option>
              <option value="2024-02">Febrero 2024</option>
              <option value="2024-01">Enero 2024</option>
              <option value="2023-12">Diciembre 2023</option>
            </select>
          </div>
        </div>
      </div>
      {/* MAPEO */}
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="my-4">
            <Card amount={transaction.amount} category_name={transaction.category_name} date={transaction.date} description={transaction.description} />
          </div>
        ))}
      </div>
    </ContainerMain>
  );
}

