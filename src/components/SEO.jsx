"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"

const SEO = ({ title, description, keywords, image, url, type = "website" }) => {
  // Default values
  const defaultTitle = "Techphilia 8.0"
  const defaultDescription =
    "Techphilia 8.0 is the annual technical festival of Amity University Patna. This website developed by Ayush, Aman Verma and Shubham Choudhary"
  const defaultKeywords =
    "techphilia, technical fest, amity university patna, hackathon, coding competition, tech events, amity event, aup, Techphilia 8.0, tech event, amivogue, workshop, snp shot, tech quiz, amiphoria, techphilia team, technical festival, technical team"
  const defaultImage = "/logo.png" // Replace with your actual logo path
  const siteUrl = "https://aiitpevent.in" // Replace with your actual domain

  // Use provided values or defaults
  const seoTitle = title ? `${title} | Techphilia 8.0` : defaultTitle
  const seoDescription = description || defaultDescription
  const seoKeywords = keywords || defaultKeywords
  const seoImage = image || defaultImage
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Get existing meta tags
    const metaTags = document.getElementsByTagName("meta")
    const metaTagsToUpdate = {
      description: seoDescription,
      keywords: seoKeywords,
      author: "Amity University Patna",
      "og:type": type,
      "og:url": seoUrl,
      "og:title": seoTitle,
      "og:description": seoDescription,
      "og:image": `${siteUrl}${seoImage}`,
      "og:site_name": "Techphilia 8.0",
      "twitter:card": "summary_large_image",
      "twitter:url": seoUrl,
      "twitter:title": seoTitle,
      "twitter:description": seoDescription,
      "twitter:image": `${siteUrl}${seoImage}`,
      viewport: "width=device-width, initial-scale=1.0",
      "theme-color": "#4f46e5",
      robots: "index, follow",
    }

    // Update existing meta tags or create new ones
    for (const [name, content] of Object.entries(metaTagsToUpdate)) {
      let metaTag = null

      // Check if meta tag already exists
      for (let i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute("name") === name || metaTags[i].getAttribute("property") === name) {
          metaTag = metaTags[i]
          break
        }
      }

      // If meta tag doesn't exist, create it
      if (!metaTag) {
        metaTag = document.createElement("meta")
        document.head.appendChild(metaTag)
      }

      // Set attributes based on meta tag type
      if (name.startsWith("og:") || name.startsWith("twitter:")) {
        metaTag.setAttribute("property", name)
      } else {
        metaTag.setAttribute("name", name)
      }

      metaTag.setAttribute("content", content)
    }

    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement("link")
      canonicalLink.setAttribute("rel", "canonical")
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute("href", seoUrl)

    // Clean up function
    return () => {
      // We don't remove meta tags on cleanup as they might be needed by other pages
      // and removing them could cause flickering
    }
  }, [seoTitle, seoDescription, seoKeywords, seoImage, seoUrl, type])

  return null // This component doesn't render anything
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

