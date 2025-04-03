"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, image, url, type = "website", structuredData }) => {
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
      <meta name="author" content="Amity University Patna" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Language Alternatives */}
      <link rel="alternate" href="https://aiitpevent.in/" hreflang="en" />
      <link rel="alternate" href="https://aiitpevent.in/hi/" hreflang="hi" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Techphilia 8.0" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@techphilia" />
      <meta name="twitter:creator" content="@techphilia" />

      {/* Additional Meta Tags */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Patna" />
      <meta name="geo.position" content="25.6078;85.1236" />
      <meta name="ICBM" content="25.6078, 85.1236" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
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
  structuredData: PropTypes.object,
}

export default SEO

