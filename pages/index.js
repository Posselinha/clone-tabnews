import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="stylesheet" href="./css/main.css"></link>
        <title>Document</title>
        <meta
          name="description"
          content="Portfolio de Gabriel Possela. Entre no meu portfolio e venha conhecer meus projetos."
        ></meta>
        <meta
          name="keywords"
          content="web development, programming, portfolio, Gabriel Possela, website services"
        ></meta>
        <meta name="author" content="Gabriel Possela"></meta>

        <meta property="og:title" content="Gabriel Possela | Portfolio"></meta>
        <meta
          property="og:description"
          content="Venha conhecer o Portfolio de Gabriel Possela. Programador FullStack voltado para desenvolvimento web."
        ></meta>
        <meta property="og:url" content="https://gabrielpossela.com.br"></meta>
        <meta property="og:type" content="website"></meta>

        <link rel="canonical" href="https://gabrielpossela.com.br"></link>
        <link rel="stylesheet" href="./src/assets/css/main.css"></link>
      </Head>

      <h1>Testando metadados</h1>
    </>
  );
}

export default Home;
