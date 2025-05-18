"use client";
import React, { useState } from "react";
import Form from 'next/form'
import Header from "@/components/header";
import { GerarProps } from "@/types/headerProps";
import { postEncurtadorUrl } from "@/services/encurtadorurl";


export default function EncurtadorUrl() {

  // Estado inicial
  const [pesquisar, setPesquisar ] = useState<GerarProps>({
    pesquisa: "",
    resultados: "",
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
        resultados:"",
      }));
    }
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

    const mockResultados = await postEncurtadorUrl(pesquisar.pesquisa);    
    setPesquisar((prevState)=>({
      ...prevState,
      resultados:mockResultados,
      loading: false, // Desativa o carregamento
    })); // Atualiza os resultados  
    console.table(pesquisar.resultados)
  };

  const Load = () => (
    <>
      {pesquisar.loading ? (
        // Ícone de carregamento enquanto está carregando
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23 23"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin h-4 w-4 text-gray-500"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor"></circle>
          <line x1="12" y1="6" x2="12" y2="12"></line>
          <line x1="12" y1="12" x2="16.5" y2="16.5"></line>
        </svg>
      ) : (
        // Ícone de pesquisa quando não está carregando        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon" 
          className="h-4 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
      )}
    </>
  );

 {/* Exibição dos resultados */}
  const ListarResultado = ()=>(       
    <ul className="results-list">
      {pesquisar.resultados.length > 0 ? (
        // pesquisar.resultados.map((result, index) => <li key={index}>{result}</li>)
        <li>{pesquisar.resultados}</li>
      ):(
          // <li>Nenhum resultado encontrado.</li>
          <p></p>
        )
      }
    </ul>
  );

  return (
    <>
      <Header title="Encurtador de Url ou Link" subtitle="Um encurtador de link (URL shortener) transformar um URL longo em um endereço mais curto, mais fácil de compartilhar e de lembrar." />             
      <div style={{ display: "flex" }}>     
      <br/>     
        <main>
          <p style={{ fontSize: "16px" }}>Facilidade de compartilhamento:</p>
          <p style={{ fontSize: "14px" }}>Links curtos são mais fáceis de digitar, copiar e colar, além de serem mais agradáveis esteticamente, especialmente em plataformas com limite de caracteres.</p> 
          <p style={{ fontSize: "16px" }}>Melhora a legibilidade:</p>
          <p style={{ fontSize: "14px" }}>Links curtos tornam o texto mais limpo e fácil de ler, evitando blocos de texto grandes e confuso.</p> 
          <p style={{ fontSize: "16px" }}>Personalização:</p>
          <p style={{ fontSize: "14px" }}>Algumas ferramentas permitem personalizar os links, tornando-os mais identificáveis e relacionados ao conteúdo a que direcionam.</p>
          <p style={{ fontSize: "16px" }}>Acompanhamento de métricas:</p>
          <p style={{ fontSize: "14px" }}>Algumas ferramentas permitem monitorar o número de cliques nos links encurtados, fornecendo dados sobre o desempenho do seu conteúdo.</p> 
          <p style={{ fontSize: "16px" }}>Segurança:</p>
          <p style={{ fontSize: "14px" }}>Alguns encurtadores oferecem recursos de proteção contra links maliciosos, ajudando a evitar fraudes como phishing.</p>
          <p style={{ fontSize: "14px" }}>Isso é útil em plataformas com limitações de espaço, como redes sociais e mensagens de texto, ou quando se pretende facilitar a divulgação de um link.</p>                    
          <Form action="/search"
            className="w-max-[50px] relative w-full lg:w-80 xl:w-full pt-4"            
          >      
            <input 
             type="text" 
             name="query"               
             className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
             value={pesquisar.pesquisa}
             placeholder="Informe a Url ou Link"
             onChange={handleInputChange}
            />                        
            <div className="pt-4 absolute right-0 top-0 mr-3 flex h-full items-center"
              onClick={handleSearch} // Adiciona o evento de clique aqui
            >
              {Load()}           
            </div>      
          </Form>
          {ListarResultado()}
        </main>              
      </div>
    </>
  );
};