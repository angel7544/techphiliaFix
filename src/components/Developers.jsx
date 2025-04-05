const Developers = () => {
  return (
    <section id="website-developers" className=" bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 premium-card">
            {/* Use h3 for the heading to maintain hierarchy */}
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">
              Techphilia 8.0 Website Developers: Ayush, Shubham Choudhary, and Aman Verma
            </h3>

            {/* Use semantic HTML5 elements */}
            <article>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                <strong>Techphilia 8.0 website</strong> was meticulously designed and developed by{" "}
                <strong>Ayush</strong>, <strong>Shubham Choudhary</strong>, and <strong>Aman Verma</strong>, talented
                Computer Science students from <strong>Amity University Patna</strong>. Their dedication to creating an
                immersive digital experience showcases the technical prowess that Techphilia celebrates.
              </p>
            </article>

            {/* Contact information with proper semantic markup */}
            <address className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-100 dark:border-gray-600 not-italic">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Development Team Contact:</strong> For inquiries about website development or technical support,
                please contact us at{" "}
                <a href="tel:+91 9661850789" className="text-secondary hover:underline">
                +91 9661850789
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Developers

