import SEO from "../components/SEO"

const Leadership = () => {
  return (
    <>
      <SEO
        title="Leadership"
        description="Meet the distinguished leadership team behind Techphilia 8.0. This website developed by Ayush, Aman Verma and Shubham Choudhary."
        keywords="techphilia events, techphilia 8, techphilia 8.0, techphilia, AIIT, technical fest competitions, amity university patna workshops, hackathon, coding competition, tech events schedule, technical teams, technology festival events, tech workshops, student competitions, bihar tech fest schedule"
        image="https://www.aiitpevent.in/leadership-og-image.png"
        url="https://www.aiitpevent.in/leadership"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Techphilia 8.0 Leadership",
          "description": "Leadership team of Techphilia 8.0 - The Annual Technical Festival of Amity University Patna",
          "publisher": {
            "@type": "Organization",
            "name": "Amity University Patna",
            "url": "https://amity.edu/patna/"
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "Techphilia 8.0",
            "description": "The Annual Technical Festival of Amity University Patna",
            "url": "https://aiitpevent.in/",
            "logo": "https://aiitpevent.in/logo.png",
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
              }
            ]
          }
        }}
      />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-2 text-center">Leadership</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            TECHPHILIA 8.0 is organized under the guidance and leadership of distinguished academicians and
            professionals.
          </p>

          {/* Leadership Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Chief Patron Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">UNDER THE ABLE LEADERSHIP OF</h2>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary">Dr. Ashok Kumar Chauhan</h3>
                <p className="text-gray-600">Hon'ble Founder President, Ritnand Balved Education Foundation</p>
              </div>

              <h2 className="text-2xl font-bold text-center text-primary mb-6">CHIEF PATRON</h2>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary">Dr. Atul Chauhan</h3>
                <p className="text-gray-600">Chancellor, Amity University Patna</p>
              </div>
            </section>

            {/* Mentors Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">MENTORS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Mr. U. Ramachandran</h3>
                  <p className="text-gray-600">Senior Vice President, Amity Education Group</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Mr. Gaurav Gupta</h3>
                  <p className="text-gray-600">Vice President, Amity Education group</p>
                </div>
              </div>
            </section>

            {/* Patron Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">PATRON</h2>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary">Dr. Vivekanand Pandey</h3>
                <p className="text-gray-600">Vice Chancellor, Amity University Patna</p>
              </div>
            </section>

            {/* Convenors Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">CONVENORS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Dr. Rashmi Shekhar</h3>
                  <p className="text-gray-600">
                    Assistant Director, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Prof. Prasanna Kumar</h3>
                  <p className="text-gray-600">
                    Program Leader, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
              </div>
            </section>

            {/* Organizing Secretary Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">ORGANIZING SECRETARY</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Dr. Sushil Kumar</h3>
                  <p className="text-gray-600">Deputy Controller of Examination, Amity University Patna</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">Dr. Navneet Kumar Yadav</h3>
                  <p className="text-gray-600">Deputy Registrar, Amity University Patna</p>
                </div>
              </div>
            </section>

            {/* Organizing Committee Section */}
            <section className="premium-card p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">ORGANIZING COMMITTEE</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Niraj Kumar Rai</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Ms. Anu Priya</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Avishek Choudhuri</h3>
                  <p className="text-gray-600">
                    Assistant Professor-IT, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Abhinav Sahay</h3>
                  <p className="text-gray-600">
                    Assistant Professor-IT, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Dr. Naveen Kumar</h3>
                  <p className="text-gray-600">
                    Associate Professor-IT, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Amar Kumar</h3>
                  <p className="text-gray-600">
                    Teaching Associate, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Ms. Khushboo</h3>
                  <p className="text-gray-600">
                    Teaching Associate, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Ramesh Kumar</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Dr. Ravi Kumar</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Shyam Shankar Dwivedi</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Suman Kumar Mishra</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Suryanarayan Ojha</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Ms. Sakshi Pandey</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Ms. Roshni Sharma</h3>
                  <p className="text-gray-600">
                    Assistant Professor, Amity Institute of Information Technology, Amity University Patna
                  </p>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-primary">Mr. Sunil Kumar</h3>
                  <p className="text-gray-600">
                    Academic Coordinator, Amity Institute of Information Technology, Amity University Patna
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

