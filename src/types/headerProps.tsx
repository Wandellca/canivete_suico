export interface HeaderProps {
    title: string;
    subtitle?: string;
  }

export interface ModalProps {    
    mensagem: string;
    isOpen: boolean;
    onClose: () => void;
  }

export interface SearchProps {
  pesquisa: string;
  resultados: string[];
  loading: boolean;
  hasError: boolean;
}

export interface GerarProps {
  pesquisa: string;
  resultados: string;
  loading: boolean;
  hasError: boolean;
}

export interface SidebarSearchProps {    
    children: React.ReactNode;
  }

// // AJUSTAR  Estrutura do componente 
// import React from "react";
// import Header from "./Header"; // Importação do componente Header

// interface LayoutProps {
//   title: string;
//   subtitle?: string;
//   children: React.ReactNode; // Para renderizar o conteúdo específico de cada página
// }

// const Layout = ({ title, subtitle, children }: LayoutProps) => {
//   return (
//     <div>
//       <Header title={title} subtitle={subtitle} /> {/* Header dinâmico */}
//       <main>{children}</main> {/* Conteúdo principal da página */}
//       <footer>
//         <p>Todos os direitos reservados © 2025</p>
//       </footer>
//     </div>
//   );
// };

// export default Layout;




// Usando o Layout nas páginas
// Você pode agora utilizar o componente  para envolver as diferentes páginas da aplicação. Aqui está um exemplo de como ficaria em algumas páginas:
// Página 1: Home

// import React from "react";
// import Layout from "./Layout";

// const HomePage = () => {
//   return (
//     <Layout title="Bem-vindo" subtitle="Explore nosso site!">
//       <p>Este é o conteúdo da página inicial.</p>
//     </Layout>
//   );
// };

// export default HomePage;



// import React from "react";
// import Layout from "./Layout";

// const AboutPage = () => {
//   return (
//     <Layout title="Sobre nós" subtitle="Nossa história">
//       <p>Conheça mais sobre a nossa empresa e equipe.</p>
//     </Layout>
//   );
// };

// export default AboutPage;



// import React from "react";
// import Layout from "./Layout";

// const ContactPage = () => {
//   return (
//     <Layout title="Contato" subtitle="Estamos aqui para ajudar">
//       <p>Entre em contato conosco por e-mail ou telefone.</p>
//     </Layout>
//   );
// };

// export default ContactPage;
