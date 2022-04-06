import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cantarell:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
