import { Github, Instagram, Twitter, Linkedin } from "lucide-react"
// Import Ayush's image
import ayushImage from "../assets/developers/ayush.jpg"
import shubhamImage from "../assets/developers/shubham.jpg"
import amanImage from "../assets/developers/aman.jpg"
// Import about page hero image
import aboutHeroImage from "../assets/developers/university.jpg"
// Keep placeholder for fallback
import placeholderImage from "../assets/placeholder.svg"
import SEO from "../components/SEO"

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Ayush",
    role: "Developer",
    image: ayushImage,
    social: {
      twitter: "https://x.com/its_hardiksoni?t=ALnLpPME9qKfMyyrQf6U_Q&s=08",
      linkedin: "https://www.linkedin.com/in/its-hardik-soni/",
      instagram: "https://www.instagram.com/its.hardiksoni?utm_source=qr&igsh=MXA5bTdldm11ZTM5MQ==",
      github: "https://github.com/ItsHardikSoni",
    },
  },
  {
    id: 2,
    name: "Shubham Choudhary",
    role: "Developer",
    image: shubhamImage,
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/shubham-choudhary-6474b3234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/shubhamchoudharyand?igsh=MWdzdm5hYnNpY2FlNw==",
      github: "https://github.com/JRshubhu12",
    },
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Developer",
    image: amanImage,
    social: {
      twitter: "https://x.com/amanver055?s=11",
      linkedin: "https://www.linkedin.com/in/aman-verma-05b6312a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/aman.verma055?igsh=MTc5azgxbzRxcGhkOQ%3D%3D&utm_source=qr",
      github: "https://github.com/amanver02",
    },
  },
]

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Amity University Patna and the team behind TECHPHILIA 8.0. This website developed by Ayush, Aman Verma and Shubham Choudhary"
        keywords="about techphilia, amity university patna, techphilia team, technical festival, technical team"
        url="/about"
      />
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-100">
            <img
              src={aboutHeroImage || placeholderImage}
              alt="Amity University Patna"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = placeholderImage // Fallback to placeholder if image fails to load
              }}
            />
          </div>
          <div >
            <div className="w-full text-center md:text-left mb-6">
              <h1 className="text-4xl font-bold text-primary inline-block">ABOUT AMITY UNIVERSITY PATNA</h1>
            </div>
            <p className="text-gray-700 mb-4">
              Amity University Patna is a part of 27-years old, leading education group of India, set up with a vision
              to contribute to nation-building through education, where currently more than 1,70,000 students are
              pursuing 300 programmes across campuses in India and abroad.
            </p>
            <p className="text-gray-700 mb-4">
              Amity University Patna is yet another landmark project by Amity to revolutionize the Indian higher
              education sector by providing globally benchmarked, research and employment oriented education. Amity
              University Patna is the youngest addition with a vision to contribute to nation building through
              education.
            </p>
            <p className="text-gray-700 mb-4">
            It presently offers various UG and PG programmes like MBA, MCA, B.Tech, B.B.A, B.C.A, B.Com, B.A
                (English, Psychology), BJMC, etc. located in the heart of the city at Bailey Road Patna, the transit
                campus is a 15 minutes' drive from airport and 25 minutes from railway station.
            </p>
            <p className="text-gray-700 mb-4">
              With an ever-expanding network of the globally benchmarked Amity group of institutions, this group now
              includes 9 Universities, 25 schools and preschools and it has campuses in as many as 10 countries.
            </p>
            <p className="text-gray-700">
              Amity Institute of Information Technology (AIIT), Amity University Patna is one of the most prestigious
              and a reputed institute in Patna in the state of Bihar, India. It is preferred by many locals as well as
              students all over the country. In fact, considering its growth statistics, it is one of the fastest
              growing institutes in Patna, Bihar.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="w-full text-center mb-12">
            <h2 className="section-title inline-block mx-auto">Meet Our Team</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
              {teamMembers.map((member) => (
                <div key={member.id} className="premium-card p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary">
                    <img
                      src={member.image || placeholderImage}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = placeholderImage // Fallback to placeholder if image fails to load
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Github`}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About

