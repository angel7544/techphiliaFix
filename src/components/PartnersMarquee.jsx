// Import placeholder image
import placeholderLogo from "../assets/placeholder.svg"
import internNexus from "../assets/partners/nexus.png"
import PizzaHut from "../assets/partners/pizzahut.png"
import gdg from "../assets/partners/gdg.png"
import Amalfi from "../assets/partners/amalfi.png"
import urbanOasis from "../assets/partners/urban.png"
import wsMobility from "../assets/partners/mobility.jpg"
import satvik from "../assets/partners/satvik.jpg"

const partners = [
  { id: 1, name: "Urban Oasis", logo: urbanOasis },
  { id: 2, name: "PizzaHut", logo: PizzaHut },
  { id: 3, name: "InternNexus", logo: internNexus},
  { id: 4, name: "GDG Patna", logo: gdg },
  { id: 5, name: "Amalfi Grand Patna", logo: Amalfi },
  { id: 6, name: "WS Mobility", logo: wsMobility},
  { id: 6, name: "Satvik Meera", logo: satvik},

]

const   PartnersMarquee = () => {
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
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
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
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}{/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}{/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}{/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}{/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}{/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}{/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
              />
            </div>
            <p className="mt-3 text-primary font-medium">{partner.name}</p>
          </div>
        ))}{/* Duplicate for seamless looping */}
        {partners.map((partner) => (
          <div key={`dup-${partner.id}`} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-white shadow-md">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-20 h-20 md:w-20 md:h-20 object-contain"
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

