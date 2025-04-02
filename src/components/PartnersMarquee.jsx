import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
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
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proud <span className="text-yellow-500">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="partners-swiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="group relative">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Partner Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100 dark:border-green-900/30">
                    {/* Logo Container */}
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-100 dark:border-green-900/30 bg-white dark:bg-gray-700 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    </div>

                    {/* Partner Name */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .partners-swiper {
          padding: 20px 10px 50px;
        }

        .partners-swiper .swiper-slide {
          height: auto;
        }

        .partners-swiper .swiper-pagination-bullet {
          background: #22c55e;
          opacity: 0.5;
        }

        .partners-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #22c55e;
        }

        .partners-swiper .swiper-button-next,
        .partners-swiper .swiper-button-prev {
          color: #22c55e;
        }

        .partners-swiper .swiper-button-next:after,
        .partners-swiper .swiper-button-prev:after {
          font-size: 24px;
        }

        @media (max-width: 640px) {
          .partners-swiper .swiper-button-next,
          .partners-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default PartnersMarquee

