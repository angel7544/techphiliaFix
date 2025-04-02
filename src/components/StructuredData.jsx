"use client"

import { useEffect } from "react"

const StructuredData = ({ data }) => {
  useEffect(() => {
    // Check if there's an existing script tag for structured data
    let scriptTag = document.querySelector('script[type="application/ld+json"]')

    // If not, create one
    if (!scriptTag) {
      scriptTag = document.createElement("script")
      scriptTag.setAttribute("type", "application/ld+json")
      document.head.appendChild(scriptTag)
    }

    // Set the JSON-LD content
    scriptTag.textContent = JSON.stringify(data)

    // Clean up function
    return () => {
      // We don't remove the script tag on cleanup as it might be needed by other pages
    }
  }, [data])

  return null // This component doesn't render anything
}

export default StructuredData

