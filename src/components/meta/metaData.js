import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import url from "url"
import config from "../../utils/siteConfig"
import { WebSiteMeta } from "../meta"

export const MetaData = ({
  data,
  settings,
  title,
  description,
  image,
  location,
}) => {
  image = image ? url.resolve(config.siteUrl, image) : null
  const canonical = url.resolve(config.siteUrl, location.pathname)

  console.log(canonical)
  return (
    <WebSiteMeta
      data={{}}
      title={config.siteTitleMeta}
      description={config.siteDescriptionMeta}
      image={image}
      type="WebSite"
      canonical={canonical}
    />
  )
}
