// Import placeholder image
import placeholderLogo from "../assets/placeholder.svg"


const partners = [
  { id: 1, name: "InternNexus", logo: placeholderLogo },
  { id: 2, name: "PizzaHut", logo: placeholderLogo },
  { id: 3, name: "Urban Oasis", logo: placeholderLogo },
  { id: 4, name: "Food Partner", logo: placeholderLogo },
  { id: 5, name: "MetaGraphics", logo: placeholderLogo },
  { id: 6, name: "Book", logo: placeholderLogo },
  { id: 7, name: "Sky Café", logo: placeholderLogo },
  { id: 8, name: "Downtown Café", logo: placeholderLogo },
  { id: 9, name: "Satwik", logo: placeholderLogo },
]

const PartnersMarquee = () => {
  return (
    <div className="overflow-hidden py-10 bg-gray-50">
      <h2 className="text-center section-title mx-auto mb-12">Our Partners</h2>
      <div className="flex space-x-12 animate-marquee">
        {partners.map((partner) => (
          <div key={partner.id} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnersMarquee

