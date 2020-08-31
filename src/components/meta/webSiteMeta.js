import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import url from "url"
import config from "../../utils/siteConfig"
import { ImageMeta } from "../meta"

export const WebSiteMeta = ({
  data,
  settings,
  canonical,
  title,
  description,
  image,
  type,
}) => {
  let ShareImage = image
  ShareImage = ShareImage ? url.resolve(config.siteUrl, ShareImage) : null

  const jsonLd = {
    "@context": `https://schema.org/`,
    "@type": type,
    url: canonical,
    image: ShareImage
      ? {
          "@type": "ImageObject",
          url: ShareImage,
          width: config.shareImageWidth,
          height: config.shareImageHeight,
        }
      : undefined,
    mainEntityOfPage: {
      "@type": `WebPage`,
      "@id": config.siteUrl,
    },
    description,
  }
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="A4iNRPaSJKyBTPFGLpRpmi1nML2B_OcXDLpSK1wD_ao"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content="urgosxd, ga, Gatsby" />
        <meta name="author" content="Urgosxd" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd, undefined, 4)}
        </script>
      </Helmet>
      <ImageMeta image={ShareImage} />
    </>
  )
}
