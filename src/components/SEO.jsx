"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, image, url, type = "website" }) => {
  const siteTitle = 'TECHPHILIA 8.0'
  const defaultDescription = 'Join Techphilia 8.0, the premier annual technical festival of Amity University Patna. Experience cutting-edge competitions, workshops, hackathons, and tech events.'
  const defaultImage = 'https://aiitpevent.in/og-image.png'
  const defaultUrl = 'https://aiitpevent.in'

  const seoTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const seoDescription = description || defaultDescription
  const seoImage = image || defaultImage
  const seoUrl = url || defaultUrl

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
}

export default SEO

