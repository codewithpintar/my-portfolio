import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta */}
        <title>Pintar Sharma – Software Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio — I’m Pintar Sharma, a Software Developer skilled in Next.js, React, UI/UX, and modern web development."
        />
        <meta name="author" content="Pintar Sharma" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Pintar Sharma – Software Developer" />
        <meta
          property="og:description"
          content="A modern portfolio showcasing my work, skills, and experience in web development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/portfolio-banner.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
