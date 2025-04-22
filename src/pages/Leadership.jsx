import SEO from "../components/SEO"

const Leadership = () => {
  return (
    <>
      <SEO
        title="Leadership"
        description="Meet the distinguished leadership team behind Techphilia 8.0, This website was developed by Ayush, Shubham Choudhary and Aman Verma, Computer Science students at Amity University Patna."
        keywords="techphilia leadership, amity university patna leaders, Dr. Ashok Kumar Chauhan, Dr. Atul Chauhan, Dr. Vivekanand Pandey, Amity Institute of Information Technology, AIIT leadership, technical fest organizers, Amity technical committee, Patna technical education leaders, Bihar educational leadership, techphilia events, techphilia 8, techphilia 8.0, techphilia, AIIT, technical fest competitions, amity university patna workshops, hackathon, coding competition, tech events schedule, technical teams, technology festival events, tech workshops, student competitions, bihar tech fest schedule, Ayush developer, Shubham Choudhary developer, Aman Verma developer"
        image="https://www.aiitpevent.in/leadership-og-image.png"
        url="https://www.aiitpevent.in/leadership"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Techphilia 8.0 Leadership Team",
          "description": "The distinguished leadership team guiding Techphilia 8.0, This website was developed by Ayush, Shubham Choudhary and Aman Verma, Computer Science students at Amity University Patna.",
          "publisher": {
            "@type": "Organization",
            "name": "Amity University Patna",
            "logo": {
              "@type": "ImageObject",
              "url": "https://aiitpevent.in/logo.png"
            },
            "url": "https://amity.edu/patna/"
          },
          "mainContentOfPage": {
            "@type": "WebPageElement",
            "cssSelector": ".container"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://aiitpevent.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Leadership",
                "item": "https://aiitpevent.in/leadership"
              }
            ]
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "Techphilia 8.0 Leadership Committee",
            "description": "The organizing committee and leadership team of Techphilia 8.0, This website was developed by Ayush, Shubham Choudhary and Aman Verma, Computer Science students at Amity University Patna.",
            "url": "https://aiitpevent.in/leadership",
            "member": [
              {
                "@type": "Person",
                "name": "Dr. Ashok Kumar Chauhan",
                "jobTitle": "Hon'ble Founder President",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Ritnand Balved Education Foundation"
                }
              },
              {
                "@type": "Person",
                "name": "Dr. Atul Chauhan",
                "jobTitle": "Chancellor",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Amity University Patna"
                }
              },
              {
                "@type": "Person",
                "name": "Mr. U. Ramachandran",
                "jobTitle": "Senior Vice President",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Amity Education Group"
                }
              },
              {
                "@type": "Person",
                "name": "Mr. Gaurav Gupta",
                "jobTitle": "Vice President",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Amity Education Group"
                }
              },
              {
                "@type": "Person",
                "name": "Dr. Vivekanand Pandey",
                "jobTitle": "Vice Chancellor",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Amity University Patna"
                }
              },
              {
                "@type": "Person",
                "name": "Dr. Rashmi Shekhar",
                "jobTitle": "Assistant Director",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Amity Institute of Information Technology, Amity University Patna"
                }
              },
              {
                "@type": "Person",
                "name": "Prof. Prasanna Kumar",
                "jobTitle": "Program Leader",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Amity Institute of Information Technology, Amity University Patna"
                }
              }
            ],
            "knowsAbout": ["Technical Education", "Technology Events", "Academic Leadership", "Educational Management"]
          }
        }}
      />
      <main className="py-16">
        <div className="container mx-auto px-4" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Techphilia 8.0 Leadership Committee" />
          <meta itemProp="url" content="https://aiitpevent.in/leadership" />
          
          <h1 className="text-4xl font-bold text-primary mb-2 text-center">Leadership</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto" itemProp="description">
            TECHPHILIA 8.0 is organized under the guidance and leadership of distinguished academicians and
            professionals.
          </p>

          {/* Leadership Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chief Patron Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">UNDER THE ABLE LEADERSHIP OF</h2>
              <div className="text-center mb-8" itemScope itemType="https://schema.org/Person" itemProp="member">
                <h3 className="text-xl font-bold text-primary" itemProp="name">Dr. Ashok Kumar Chauhan</h3>
                <p className="text-gray-600" itemProp="jobTitle">Hon'ble Founder President, Ritnand Balved Education Foundation</p>
                <meta itemProp="sameAs" content="https://amity.edu/founder-president.aspx" />
              </div>

              <h2 className="text-2xl font-bold text-center text-primary mb-6">CHIEF PATRON</h2>
              <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                <h3 className="text-xl font-bold text-primary" itemProp="name">Dr. Atul Chauhan</h3>
                <p className="text-gray-600" itemProp="jobTitle">Chancellor, Amity University Patna</p>
                <meta itemProp="sameAs" content="https://amity.edu/chancellor.aspx" />
              </div>
            </section>

            {/* Mentors Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">MENTORS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Mr. U. Ramachandran</h3>
                  <p className="text-gray-600" itemProp="jobTitle">Senior Vice President, Amity Education Group</p>
                </div>
                <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Mr. Gaurav Gupta</h3>
                  <p className="text-gray-600" itemProp="jobTitle">Vice President, Amity Education group</p>
                </div>
              </div>
            </section>

            {/* Patron Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">PATRON</h2>
              <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                <h3 className="text-xl font-bold text-primary" itemProp="name">Dr. Vivekanand Pandey</h3>
                <p className="text-gray-600" itemProp="jobTitle">Vice Chancellor, Amity University Patna</p>
                <meta itemProp="workLocation" content="Patna, Bihar, India" />
              </div>
            </section>

            {/* Convenors Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">CONVENORS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Dr. Rashmi Shekhar</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Assistant Director, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Prof. Prasanna Kumar</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Program Leader, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
              </div>
            </section>

            {/* Organizing Secretary Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">ORGANIZING SECRETARY</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Dr. Sushil Kumar</h3>
                  <p className="text-gray-600" itemProp="jobTitle">Deputy Controller of Examination, Amity University Patna</p>
                </div>
                <div className="text-center" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Dr. Navneet Kumar Yadav</h3>
                  <p className="text-gray-600" itemProp="jobTitle">Deputy Registrar, Amity University Patna</p>
                </div>
              </div>
            </section>

            {/* Organizing Committee Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">ORGANIZING COMMITTEE</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Mr. Niraj Kumar Rai</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Ms. Anu Priya</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Mr. Avishek Choudhuri</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Assistant Professor-IT, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Mr. Abhinav Sahay</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Assistant Professor-IT, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Dr. Naveen Kumar</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Associate Professor-IT, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Mr. Amar Kumar</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Teaching Associate, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Ms. Khushboo</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Teaching Associate, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4" itemScope itemType="https://schema.org/Person" itemProp="member">
                  <h3 className="text-lg font-bold text-primary" itemProp="name">Mr. Ramesh Kumar</h3>
                  <p className="text-gray-600" itemProp="jobTitle">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default Leadership

