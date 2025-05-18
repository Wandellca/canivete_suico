https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
https://app-router.vercel.app/
https://demo.vercel.store/
https://demo.vercel.store/
https://vercel.com/new/templates
https://vercel.com/templates/next.js/nextjs-commerce
https://prismic.io/blog/nextjs-example-projects
https://blog-tutorial-algolia.vercel.app/articles/perilous-yoga

/meu-projeto
│── /app
│   ├── /layout.tsx        # Layout padrão para toda a aplicação
│   ├── /page.tsx          # Página principal ("/")
│   ├── /sobre
│   │   ├── /page.tsx      # Página sobre ("/sobre")
│   ├── /blog
│   │   ├── /[id]          # Rota dinâmica ("/blog/:id")
│   │   │   ├── /page.tsx  # Página do post
│   ├── /api
│   │   ├── /hello/route.ts # Rota API ("/api/hello")
│   ├── /dashboard
│   │   ├── /layout.tsx    # Layout específico para o dashboard
│   │   ├── /page.tsx      # Página inicial do dashboard ("/dashboard")
│── /public                # Arquivos estáticos (imagens, ícones, fontes)
│── /styles                # CSS ou Tailwind
│── /components            # Componentes reutilizáveis
│── /lib                   # Funções úteis (helpers, hooks)
│── /services              # Serviços externos (APIs, autenticação)
│── /middleware.ts         # Middleware para Next.js
│── /next.config.js        # Configuração do Next.js
│── /tsconfig.json         # Configuração do TypeScript
│── /package.json          # Dependências do projeto



/app
│── /layout.tsx        # Layout padrão
│── /bem-vindo
│   ├── /page.tsx      # Página de Bem-vindo ("/bem-vindo")
│── /contato
│   ├── /page.tsx      # Página de Contato ("/contato")
│── /conta-subtracao
│   ├── /page.tsx      # Página de Conta Subtração ("/conta-subtracao")
│── /feedback
│   ├── /page.tsx      # Página de Feedback ("/feedback")
