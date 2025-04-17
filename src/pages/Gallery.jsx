"use client"

import { useState, useRef, useEffect } from "react"
import img1 from "../assets/gallery/img1.jpg"
import img2 from "../assets/gallery/img2.jpg"
import img3 from "../assets/gallery/img3.jpg"
import img4 from "../assets/gallery/img4.jpg"
import img5 from "../assets/gallery/img5.jpg"
import img6 from "../assets/gallery/img6.jpg"
import img7 from "../assets/gallery/img7.jpg"
import img8 from "../assets/gallery/img8.jpg"
import img9 from "../assets/gallery/img9.jpg"
import img10 from "../assets/gallery/img10.jpg"
import img11 from "../assets/gallery/img11.jpg"
import img12 from "../assets/gallery/img12.jpg"
import img13 from "../assets/gallery/img13.jpg"
import img14 from "../assets/gallery/img14.jpg"
import img15 from "../assets/gallery/img15.jpg"
import img16 from "../assets/gallery/img16.jpg"
import img17 from "../assets/gallery/img17.jpg"
import img18 from "../assets/gallery/img18.jpg"
import img19 from "../assets/gallery/img19.jpg"
import img20 from "../assets/gallery/img20.jpg"
import img21 from "../assets/gallery/img21.jpg"
import imgVideo4 from "../assets/gallery/imgVideo4.png"
import imgVideo5 from "../assets/gallery/imgVideo5.png"
import video1 from "../assets/gallery/video1.mp4"
import video2 from "../assets/gallery/video2.mp4"
import video3 from "../assets/gallery/video3.mp4"
import video4 from "../assets/gallery/video4.mp4"
import video5 from "../assets/gallery/video5.mp4"
import SEO from "../components/SEO"
import { Play, X } from "lucide-react"

// Sample gallery data - reduced to 14 images
const galleryImages = [
  { id: 1, src: img1, alt: "Hackathon participants coding" },
  { id: 2, src: img2, alt: "Robotics competition" },
  { id: 3, src: img3, alt: "Tech talk by industry expert" },
  { id: 4, src: img4, alt: "Award ceremony" },
  { id: 5, src: img5, alt: "Workshop session" },
  { id: 6, src: img6, alt: "Team building activity" },
  { id: 7, src: img7, alt: "Project showcase" },
  { id: 8, src: img8, alt: "Gaming tournament" },
  { id: 9, src: img9, alt: "Cultural performance" },
  { id: 10, src: img10, alt: "Campus view during event" },
  { id: 11, src: img11, alt: "Networking session" },
  { id: 12, src: img12, alt: "Prize distribution" },
  { id: 13, src: img13, alt: "Student presentations" },
  { id: 14, src: img14, alt: "Innovation showcase" },
  { id: 15, src: img15, alt: "Innovation showcase" },
  { id: 16, src: img16, alt: "Innovation showcase" },
  { id: 17, src: img17, alt: "Innovation showcase" },
  { id: 18, src: img18, alt: "Innovation showcase" },
  { id: 19, src: img19, alt: "Innovation showcase" },
  { id: 20, src: img20, alt: "Innovation showcase" },
  { id: 21, src: img21, alt: "Innovation showcase" },
]

// Sample video data
const galleryVideos = [
  {
    id: 1,
    title: "Amivogue (University)",
    thumbnail: img1, // Using an image as thumbnail
    videoUrl: video1, // Replace with actual video URL
  },
  {
    id: 2,
    title: "Amivogue (School)",
    thumbnail: img3, // Using an image as thumbnail
    videoUrl: video2,
  },
  {
    id: 3,
    title: "Treasure Hunt (School)",
    thumbnail: img2, // Using an image as thumbnail
    videoUrl: video3,
  },
  {
    id: 4,
    title: "Techphilia 7.0",
    thumbnail: imgVideo4, // Using an image as thumbnail
    videoUrl: video4,
  },
  {
    id: 5,
    title: "Ganesh Vandana",
    thumbnail: imgVideo5, // Using an image as thumbnail
    videoUrl: video5,
  },
]

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState(null)
  const videoRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Check device type on mount and window resize
  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }

    checkDeviceType()
    window.addEventListener("resize", checkDeviceType)

    return () => {
      window.removeEventListener("resize", checkDeviceType)
    }
  }, [])

  // Function to open video modal
  const openVideoModal = (video) => {
    setSelectedVideo(video)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  // Function to close video modal
  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setSelectedVideo(null)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  // Effect to play video when modal opens
  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }
  }, [selectedVideo])

  // Filter content based on active tab
  const filteredContent = () => {
    switch (activeTab) {
      case "videos":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                className="premium-card overflow-hidden group cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/80 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                      <Play size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )
      case "photos":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="premium-card overflow-hidden group">
                <div className="relative aspect-square">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        )
      default: // "all" tab
        return (
          <>
            {/* Featured Videos Section */}
            <h2 className="text-2xl font-bold text-primary mb-4">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {galleryVideos.map((video) => (
                <div
                  key={video.id}
                  className="premium-card overflow-hidden group cursor-pointer"
                  onClick={() => openVideoModal(video)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white/80 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                        <Play size={24} className="text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo Gallery Section */}
            <h2 className="text-2xl font-bold text-primary mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="premium-card overflow-hidden group">
                  <div className="relative aspect-square">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )
    }
  }

  // Get video container height based on device
  const getVideoContainerClass = () => {
    if (isMobile) {
      return "h-[70vh]" // 70% of viewport height on mobile
    } else if (isTablet) {
      return "h-[80vh]" // 80% of viewport height on tablets
    } else {
      return "h-[85vh]" // 85% of viewport height on desktop
    }
  }

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore the visual journey of Techphilia 8.0 through our photo and video gallery. This website was developed by Ayush, Shubham Choudhary and Aman Verma, Computer Science students at Amity University Patna."
        keywords="techphilia events, techphilia 8, techphilia 8.0, techphilia, AIIT, technical fest competitions, amity university patna workshops, hackathon, coding competition, tech events schedule, technical teams, technology festival events, tech workshops, student competitions, bihar tech fest schedule, Ayush developer, Shubham Choudhary developer, Aman Verma developer"
        image="https://www.aiitpevent.in/gallery-og-image.png"
        url="https://www.aiitpevent.in/gallery"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Techphilia 8.0 Gallery",
          description:
            "Photo and video gallery of Techphilia 8.0 - This website was developed by Ayush, Shubham Choudhary and Aman Verma, Computer Science students at Amity University Patna.",
          publisher: {
            "@type": "Organization",
            name: "Amity University Patna",
            url: "https://amity.edu/patna/",
          },
          image: galleryImages.map((image) => ({
            "@type": "ImageObject",
            contentUrl: image.src,
            name: image.alt,
            description: image.alt,
            thumbnailUrl: image.src,
            uploadDate: "2025-04-21T00:00:00+05:30",
          })),
        }}
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-2 text-center">Gallery</h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Relive the memorable moments from previous editions of TECHPHILIA
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "all" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-6 py-2 text-sm font-medium ${
                  activeTab === "videos" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === "photos" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Photos
              </button>
            </div>
          </div>

          {/* Gallery Content */}
          {filteredContent()}
        </div>
      </div>

      {/* Video Modal - Responsive height */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button positioned in the corner */}
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            {/* Video container with responsive height */}
            <div
              className={`w-full rounded-lg overflow-hidden flex items-center justify-center ${getVideoContainerClass()}`}
            >
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                className="max-h-full max-w-full object-contain"
                controls
                playsInline
                controlsList="nodownload"
                poster={selectedVideo.thumbnail}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery

