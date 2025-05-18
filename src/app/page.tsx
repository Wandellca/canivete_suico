import Header from "@/components/header";
export default function Home() {
  return (
    <>  
        <Header title="HOME" subtitle="Este é um site simples para demonstrar como usar essas tecnologias juntas." />         
        <br/>
        <br/>
        <br/>
        <br/>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <br/>
        <br/>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            className="rounded-full border transition-colors flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 px-4 py-2"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
          <a
            className="rounded-full border border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-900 px-4 py-2 w-full sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </>    
  );
}
