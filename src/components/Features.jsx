export default function Features() {
  const features = [
    {
      title: "Instant Appointment Booking",
      description:
        "Book your doctor visits in seconds with our intuitive scheduling system. Real-time availability and instant confirmations.",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500",
      stats: "Book in <60s",
    },
    {
      title: "Verified Medical Professionals",
      description:
        "All doctors are thoroughly verified with proper credentials, certifications, and patient reviews for your safety.",
      icon: "🩺",
      gradient: "from-green-500 to-emerald-500",
      stats: "500+ Doctors",
    },
    {
      title: "24/7 Platform Access",
      description:
        "Access healthcare services anytime, anywhere. Book appointments and manage your health on your schedule.",
      icon: "⏰",
      gradient: "from-purple-500 to-pink-500",
      stats: "Always Available",
    },
    {
      title: "Smart Doctor Search",
      description:
        "Find the perfect specialist by location, specialty, availability, ratings, and insurance acceptance.",
      icon: "🔍",
      gradient: "from-orange-500 to-red-500",
      stats: "10+ Filters",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-linear-to-b from-white to-blue-50/30"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🌟</span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Healthcare Made{" "}
            <span className="bg-linear-to-b from-primary to-blue-600 bg-clip-text text-transparent">
              Simple & Secure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare with our patient-first platform
            designed to make medical appointments effortless and trustworthy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2">
                {/* Background Gradient Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-b ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon Container */}
                <div
                  className={`relative mb-6 w-16 h-16 rounded-2xl bg-linear-to-b ${item.gradient} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {item.stats}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-b ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Better Healthcare?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of patients who trust CareBook for their medical
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg px-8">
                Book Your First Appointment
              </button>
              <button className="btn btn-outline btn-lg px-8">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
