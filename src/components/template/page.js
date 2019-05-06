import Link from 'next/link'
import Head from 'next/head'

const Page = ({ children, title = 'Assista filmes online onde você quiser pelo Telecine Play' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='author' content='Reinaldo Amorim' />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" type="image/png" href="../../../static/images/favicon.ico" />
      <link rel="stylesheet" href="../../../static/css/style.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
    </Head>
    
    {children}
    
  </div>
);

export default Page;