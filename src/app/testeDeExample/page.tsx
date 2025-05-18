'use client'
import React from "react";
// import Header from "@/components/header";
import { useState } from "react";

export default function TesteDeExemplo() {  
  // return (
  //   <>  
  //     <Header title="Pagina De Teste" subtitle="Pagina Para Testes"/>          
  //     <p>Este é um site simples para demonstrar como usar essas tecnologias juntas.</p> 
  //     <div className="flex flex-col items-center mt-10" >                                                
  //       <p>er</p>
  //     </div>
  //   </>  
  // ); 
  const [isOpen, setIsOpen ] = useState(false);
  const options = ["Opção 1", "Opção 2", "Opção 3"];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Selecione
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-white border rounded shadow">
          {options.map((option, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-200">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};
