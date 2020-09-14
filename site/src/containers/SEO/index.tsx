import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { config } from "../../config/seo"

export const SEO = () => {
  const { site } = useStaticQuery(query)
  const { description, keywords } = config()

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}`,
    keywords: `${keywords}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      {/* html attributes */}
      <html lang="en" />

      {/* basic tags */}
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="5 days" />

      {/* og tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta
        property="business:contact_data:street_address"
        content="Vappalassery"
      />
      <meta property="business:contact_data:locality" content="kochi" />
      <meta property="business:contact_data:region" content="kerala" />
      <meta property="business:contact_data:postal_code" content="683572" />
      <meta property="business:contact_data:country_name" content="india" />

      {/* twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`
