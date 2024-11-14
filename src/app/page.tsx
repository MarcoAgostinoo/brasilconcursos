import Head from "next/head";
import styles from "./page.module.css";
import Home from "./pages/home/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'; // Import next/script

export default function Index() {
  return (
    <>
      <Head>
        {/* Meta Tags Básicas para SEO */}
        <title>BrasilConcursos - Dicas, Materiais e Rotinas de Estudo para Concursos Públicos</title>
        <meta name="description" content="BrasilConcursos é seu portal de dicas e materiais para concursos públicos, com rotinas de estudos, estratégias e conteúdos exclusivos para quem busca aprovação." />
        
        {/* Meta Tags Open Graph para redes sociais */}
        <meta property="og:title" content="BrasilConcursos - Dicas, Materiais e Rotinas de Estudo para Concursos Públicos" />
        <meta property="og:description" content="BrasilConcursos é seu portal de dicas e materiais para concursos públicos, com rotinas de estudos, estratégias e conteúdos exclusivos para quem busca aprovação." />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://www.brasilconcursos.com.br" />
        <meta property="og:type" content="website" />

        {/* Meta Tags para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BrasilConcursos - Dicas, Materiais e Rotinas de Estudo para Concursos Públicos" />
        <meta name="twitter:description" content="BrasilConcursos oferece dicas, materiais e rotinas de estudos para quem se prepara para concursos públicos." />
        <meta name="twitter:image" content="/images/logo.png" />

        {/* Meta Tags para a área de pesquisa */}
        <meta name="robots" content="index, follow" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />

        {/* Definindo Charset e viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.page}>
        <Home />
      </div>

      {/* Load Bootstrap JS asynchronously */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
        strategy="afterInteractive" 
      />
    </>
  );
}
