import Link from 'next/link'
import Head from 'next/head'

const Page = ({ children, title = 'Assista filmes online onde você quiser pelo Telecine Play' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content="No Telecine Play você encontra, com exclusividade, filmes premiados dos maiores estúdios de Hollywood e o melhor do cinema nacional, disponíveis para os assinantes dos 6 canais da Rede Telecine. São mais de 1.500 filmes para assistir a qualquer hora no computador, smartphone, tablet, Smart TV e Xbox One." />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='author' content='Reinaldo Amorim' />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" type="image/png" href="../../../static/images/favicon.ico" />
      <link rel="stylesheet" href="../../../static/css/style.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://telecine.reinaldoamorim.com.br/" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Telecine Play" />
      <meta property="og:description" content="No Telecine Play você encontra, com exclusividade, filmes premiados dos maiores estúdios de Hollywood e o melhor do cinema nacional, disponíveis para os assinantes dos 6 canais da Rede Telecine. São mais de 1.500 filmes para assistir a qualquer hora no computador, smartphone, tablet, Smart TV e Xbox One." />
      <meta property="og:image" content="http://telecine.reinaldoamorim.com.br/static/images/1.jpg" />
    </Head>
    
    {children}
    
  </div>
);

export default Page;