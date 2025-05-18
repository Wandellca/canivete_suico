import React from "react";
import Header from "@/components/header";
import Image from "next/image";

export default function NaoEncontrado() {

  const images = [
    "/404.jpg",
    "/404-1.jpg",
    "/404-2.jpg",
    "/404-3.jpg",
  ];

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const randomImage = getRandomImage();
  
  return (
    <>  
      <Header title="ERRO# 404" subtitle="Pagina não Localizada 404" />          
      <p>Este é um site simples para demonstrar como usar essas tecnologias juntas.</p> 
      <div className="flex flex-col items-center mt-10" >                                                
          <Image className="w-[35%] h-[80%]" src={randomImage} alt="Acme Store logo" width={100} height={100} />
      </div>
    </>  
  );
};