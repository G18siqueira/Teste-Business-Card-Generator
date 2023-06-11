import { ReactNode } from 'react'

import Head from 'next/head'

interface SeoNameProps {
  title: string
  description: string
  seoUrl: string
  children: ReactNode
}

export default function Seo({
  title,
  description,
  seoUrl,
  children,
}: SeoNameProps) {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="canonical" content={seoUrl}></meta>
        <link rel="canonical" href={seoUrl} />

        <meta name="image" content="" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />

        {/* <!-- Open Graph / Facebook Meta Tags --> */}
        <meta name="title" property="og:title" content={title} />
        <meta name="site_name" property="og:site_name" content={title} />
        <meta name="url" property="og:url" content={seoUrl} />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta name="type" property="og:type" content="website" />
        <meta name="image" property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={seoUrl} />
        <meta property="twitter:url" content={seoUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="" />
      </Head>

      <main>{children}</main>
    </>
  )
}
