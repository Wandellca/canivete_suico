"use client";
import Link from 'next/link';
import Image from 'next/image';
import Form from 'next/form';
import React, { useState } from "react";
import { SearchProps } from "../types/headerProps";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Estado inicial
  const toggleMobileMenu = () => {  
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Estado inicial
  const [pesquisar, setPesquisar ] = useState<SearchProps>({
    pesquisa: "",
    resultados: [],
    loading:false,
    hasError: false,
  });
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setPesquisar((prevState)=>({
      ...prevState,
      pesquisa: query,
      hasError: false, 
    })); // Atualiza o estado com o texto digitado
     
    // Limpar resultados se o input estiver vazio
    if (query.trim() === "") {
      setPesquisar((prevState) => ({
        ...prevState,
        resultados: [],
      }));
    }

    if (!pesquisar.pesquisa.trim()) {
      // Atualiza estado para exibir erro
      setPesquisar((prevState) => ({
        ...prevState,
        hasError: true, // Sinaliza erro
      }));
      return; // Interrompe a busca
    }
   
    setPesquisar((prevState) => ({
      ...prevState,
      loading: true, // Ativa o carregamento 
      hasError: false, 
    }));
    
    // Simulação de busca com atraso
    setTimeout(() => {
    
      // Simulação de pesquisa (use fetch ou outra API para buscar dados reais)
      const mockResultados = [
        "Resultado 1 relacionado a " + pesquisar.pesquisa,
        "Resultado 2 relacionado a " + pesquisar.pesquisa,
        "Resultado 3 relacionado a " + pesquisar.pesquisa,
      ];

      setPesquisar((prevState)=>({
        ...prevState,
        resultados:mockResultados,
        loading: false, // Desativa o carregamento
      })); // Atualiza os resultados      
    }, 100); // Simula um atraso de 3 segundos 
  };

  const handleSearch = async () => {    
    if (!pesquisar.pesquisa.trim()) {
      // Atualiza estado para exibir erro
      setPesquisar((prevState) => ({
        ...prevState,
        hasError: true, // Sinaliza erro
      }));
      return; // Interrompe a busca
    }
   
    setPesquisar((prevState) => ({
      ...prevState,
      loading: true, // Ativa o carregamento 
      hasError: false, 
    }));
    
    // Simulação de busca com atraso
    setTimeout(() => {
    
      // Simulação de pesquisa (use fetch ou outra API para buscar dados reais)
      const mockResultados = [
        "Resultado 1 relacionado a " + pesquisar.pesquisa,
        "Resultado 2 relacionado a " + pesquisar.pesquisa,
        "Resultado 3 relacionado a " + pesquisar.pesquisa,
      ];

      setPesquisar((prevState)=>({
        ...prevState,
        resultados:mockResultados,
        loading: false, // Desativa o carregamento
      })); // Atualiza os resultados      
    }, 3000); // Simula um atraso de 3 segundos
  };

  const Load = () => (
    <>
        {/* // Ícone de pesquisa quando não está carregando */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg> 
    </>
  );


 {/* Exibição dos resultados */}
  const ListarResultado = ()=>(   
    <div className='bg-white border border-gray-400 rounded-2xl absolute top-1 right-0 left-0 shadow-2xl'>
      <ul className="results-list">
        {pesquisar.resultados.length > 0 ? (
          pesquisar.resultados.map(
            (result, index) => 
              <li key={index} className='flex items-center gap-4 border-t border-gray-400 first:rounded-t-2xl last:rounded-b-2xl first:border-0 py-3 px-3 focus:outline-none focus:ring-4 ring-inset ring-gray-100 transition-colors hover:bg-gray-100' >
                {result}
              </li>
            )
        ):(
            // <li>Nenhum resultado encontrado.</li>   
            <p></p>
            )
        }
      </ul>
    </div>
  );

  return (
    <nav 
      className="relative flex items-center justify-between p-4 lg:px-3 border-custom"      
      style={{
        borderWidth: "var(--border-width-nav)",
        borderColor: "var(--border-color-nav)",
        backgroundColor: "var(--body-sidebar)"                  
      }}
    >
      <div className="block flex-none md:hidden">
        <button aria-label="Open mobile menu" 
          className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
          onClick={toggleMobileMenu}
          style={{
            backgroundColor: "var(--body-bg)",
            opacity:"var(--body-op)"         
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <Link className="mr-2 flex w-full items-center justify-center sm:w-auto md:w-auto lg:mr-8" href="/">
          <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[48px] w-[96px] rounded-xl">
            <Image className="h-[32px] w-[80px]" 
              src="/next.svg" alt="Acme Store logo"           
              width={80} height={32} 
            />
              </div>
              <div className="ml-2 flex-none text-sm font-medium uppercase md:block">Canivete Suiço</div>            
            </Link>
            <ul className="hidden gap-4 text-sm sm:flex sm:items-center md:gap-6 lg:gap-8">
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/encurtadorUrl">Encurtador Url</Link>
              </li>
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/naoEncontrado">Conversor</Link>
              </li>
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/testeDeExample">Pagina de Testes</Link>
              </li>
            </ul>
        </div>
        <div className="hidden justify-center md:flex sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <Form className="w-max-[50px] relative w-full lg:w-80 xl:w-full"
             onSubmit={(e) => e.preventDefault()}
             action="/search">
            <input 
              type="text" 
              placeholder={
                pesquisar.hasError
                  ? "Por favor, digite algo para pesquisar!" // Mensagem de erro
                  : "Digite sua pesquisa..."
              }                
              className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"                           
              style={{borderColor: pesquisar.hasError ? "red" : "gray",}}              
              name="q"               
              onChange={handleInputChange} // Atualiza o estado ao digitar
              value={pesquisar.pesquisa} // Vincula o valor ao estado
            /> 
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center"
              onClick={handleSearch} // Adiciona o evento de clique aqui
            >
              {Load()}           
            </div>
          </Form>
          {ListarResultado()}
        </div>

        <div className="flex justify-end sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <button aria-label="Open cart"
            style={{
              backgroundColor: "var(--body-bg)",
              opacity:"var(--body-op)"         
            }}
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 transition-all ease-in-out hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
              </svg>
            </div>
          </button>          
        </div> 
      </div>        
      <div 
        className={`fixed top-0 left-0 h-full w-full bg-white z-[9999] dark:bg-black transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
          <div className="flex items-center gap-4 pt-4 pr-4 pl-4 pb-1">
            <button
              aria-label="Close mobile menu"
              onClick={toggleMobileMenu}              
              className="flex h-9 w-9 items-center justify-center rounded-md text-black transition-colors md:hidden dark:text-white"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <Form onSubmit={(e) => e.preventDefault()}
            className="w-max-[50px] relative w-[85%] lg:w-80 xl:w-full" 
            action="/search">
            <input type="text" 
              placeholder="Pesquise quais ferramentas..." 
              autoComplete="off" 
              className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400" 
              name="q"                             
              onChange={handleInputChange} // Atualiza o estado ao digitar
              value={pesquisar.pesquisa} // Vincula o valor ao estado
              /> 
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center"
            //  onClick={handleSearch} // Adiciona o evento de clique aqui
            >
              {Load()}                 
            </div>
          </Form>
          {ListarResultado()}
          </div>
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/encurtadorUrl"
                onClick={toggleMobileMenu}
              >
                Encurtador Url
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/naoEncontrado"
                onClick={toggleMobileMenu}
              >
                Conversor
              </Link>
            </li>
          </ul>
        </div>      
    </nav>
  );
}