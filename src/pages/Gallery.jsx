import gallery1 from "../assets/gallery/gallery1.jpg"
import gallery2 from "../assets/gallery/gallery2.jpg"
import gallery3 from "../assets/gallery/gallery3.jpg"
import gallery4 from "../assets/gallery/gallery4.jpg"
import gallery5 from "../assets/gallery/gallery5.jpg"
import gallery6 from "../assets/gallery/gallery6.jpg"
import gallery7 from "../assets/gallery/galary7.jpg"
import gallery8 from "../assets/gallery/galary8.jpg"
import gallery9 from "../assets/gallery/galary9.jpg"
import gallery10 from "../assets/gallery/galary10.jpg"
import gallery11 from "../assets/gallery/galary11.jpg"
import gallery12 from "../assets/gallery/galary12.jpg"
import gallery13 from "../assets/gallery/galary13.jpg"
import gallery14 from "../assets/gallery/galary14.jpg"
import gallery15 from "../assets/gallery/galary15.jpg"
import gallery16 from "../assets/gallery/galary16.jpg"
import gallery17 from "../assets/gallery/galary17.jpg"
import gallery18 from "../assets/gallery/galary18.jpg"
import gallery19 from "../assets/gallery/galary19.jpg"
import gallery20 from "../assets/gallery/galary20.jpg"
import gallery21 from "../assets/gallery/galary21.jpg"
import gallery22 from "../assets/gallery/galary22.jpg"
import SEO from "../components/SEO"

// Sample gallery data
const galleryImages = [
  { id: 1, src: gallery1, alt: "Hackathon participants coding" },
  { id: 2, src: gallery2, alt: "Robotics competition" },
  { id: 3, src: gallery3, alt: "Tech talk by industry expert" },
  { id: 4, src: gallery4, alt: "Award ceremony" },
  { id: 5, src: gallery5, alt: "Workshop session" },
  { id: 6, src: gallery6, alt: "Team building activity" },
  { id: 7, src: gallery7, alt: "Project showcase" },
  { id: 8, src: gallery8, alt: "Gaming tournament" },
  { id: 9, src: gallery9, alt: "Cultural performance" },
  { id: 10, src: gallery10, alt: "Campus view during event" },
  { id: 11, src: gallery11, alt: "Networking session" },
  { id: 12, src: gallery12, alt: "Prize distribution" },
  { id: 13, src: gallery13, alt: "Prize distribution" },
  { id: 14, src: gallery14, alt: "Prize distribution" },
  { id: 15, src: gallery15, alt: "Prize distribution" },
  { id: 16, src: gallery16, alt: "Prize distribution" },
  { id: 17, src: gallery17, alt: "Prize distribution" },
  { id: 18, src: gallery18, alt: "Prize distribution" },
  { id: 19, src: gallery19, alt: "Prize distribution" },
  { id: 20, src: gallery20, alt: "Prize distribution" },
  { id: 21, src: gallery21, alt: "Prize distribution" },
  { id: 22, src: gallery22, alt: "Prize distribution" },
]

const Gallery = () => {
  return (
    <>
      <SEO
        title="Gallery"
        description="Explore the visual journey of Techphilia 8.0 through our photo gallery. This website developed by Ayush, Aman Verma and Shubham Choudhary."
        keywords="techphilia gallery, amity university patna photos, technical fest pictures, techphilia event photos, workshop images, competition photos, tech festival gallery, amity university patna event gallery"
        image="https://www.aiitpevent.in/gallery-og-image.png"
        url="https://www.aiitpevent.in/gallery"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Techphilia 8.0 Gallery",
          "description": "Photo gallery of Techphilia 8.0 - The Annual Technical Festival of Amity University Patna",
          "publisher": {
            "@type": "Organization",
            "name": "Amity University Patna",
            "url": "https://amity.edu/patna/"
          },
          "image": galleryImages.map(image => ({
            "@type": "ImageObject",
            "contentUrl": image.src,
            "name": image.alt,
            "description": image.alt,
            "thumbnailUrl": image.src,
            "uploadDate": "2025-04-21T00:00:00+05:30"
          }))
        }}
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-2 text-center">Gallery</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Relive the memorable moments from previous editions of TECHPHILIA
          </p>

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
        </div>
      </div>
    </>
  )
}

export default Gallery

