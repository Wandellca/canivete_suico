"use client";
import React from "react";
import { HeaderProps } from "../types/headerProps";

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (        
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>    
  );
};

export default Header;