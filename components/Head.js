import React from "react";
import Head from "next/head";

const HEAD_URL = "https://buildspace-solana-pay.vercel.app";
const HEAD_TITLE = "Fortune Cookie Store";
const HEAD_DESCRIPTION = "Get a Solana-blessed fortunes";
const HEAD_IMAGE_URL = "https://cdn.buildspace.so/courses/solana-pay/metadata.png";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>{HEAD_TITLE}</title>
      <meta name="title" content={HEAD_TITLE} />
      <meta name="description" content={HEAD_DESCRIPTION} />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={HEAD_URL} />
      <meta property="og:title" content={HEAD_TITLE} />
      <meta property="og:description" content={HEAD_DESCRIPTION} />
      <meta property="og:image" content={HEAD_IMAGE_URL} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={HEAD_URL} />
      <meta property="twitter:title" content={HEAD_TITLE} />
      <meta property="twitter:description" content={HEAD_DESCRIPTION} />
      <meta property="twitter:image" content={HEAD_IMAGE_URL} />
    </Head>
  );
}
