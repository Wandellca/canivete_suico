"use client";
import React from "react";
import Form from 'next/form';
import { SidebarSearchProps } from "../types/headerProps";

const SidebarSearch : React.FC<SidebarSearchProps> = ({children}) => 
{
  return(        
        <Form onSubmit={(e) => e.preventDefault()}           
            className="w-max-[50px] relative w-[85%] lg:w-80 xl:w-full" 
            action="/search"
        >
            {children}    
        </Form>
    );
};

export default SidebarSearch;