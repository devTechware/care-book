import Image from "next/image";
import Link from "next/link";

function getStatIcon(index) {
  const icons = ["👥", "🩺", "🎯", "⭐"];
  return icons[index];
}

function getProgressWidth(index) {
  const widths = ["95%", "90%", "85%", "98%"];
  return widths[index];
}

export default function AboutUs() {
  const stats = [
    { number: "10,000+", label: "Patients Served" },
    { number: "500+", label: "Verified Doctors" },
    { number: "50+", label: "Medical Specialties" },
    { number: "98%", label: "Patient Satisfaction" },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Director",
      bio: "Board-certified physician with 15+ years of experience in healthcare innovation.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      specialty: "Internal Medicine",
    },
    {
      name: "Michael Rodriguez",
      role: "Technology Lead",
      bio: "Tech entrepreneur passionate about making healthcare accessible through technology.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specialty: "Health Tech",
    },
    {
      name: "Dr. Emily Watson",
      role: "Clinical Advisor",
      bio: "Pediatric specialist focused on patient-centered care and digital health solutions.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      specialty: "Pediatrics",
    },
    {
      name: "James Kim",
      role: "Operations Director",
      bio: "Healthcare administrator dedicated to streamlining medical appointment processes.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialty: "Healthcare Management",
    },
  ];

  const values = [
    {
      icon: "🔒",
      title: "Trust & Security",
      description:
        "We prioritize the security of your health information and build trust through transparency.",
    },
    {
      icon: "❤️",
      title: "Patient First",
      description:
        "Every decision we make is centered around improving patient experience and outcomes.",
    },
    {
      icon: "⚡",
      title: "Innovation",
      description:
        "We leverage technology to simplify healthcare while maintaining the human touch.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We work closely with healthcare providers to create solutions that benefit everyone.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <span>🏥</span>
                About CareBook
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Revolutionizing{" "}
                <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Healthcare
                </span>{" "}
                Access
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                CareBook was founded with a simple mission: to make quality
                healthcare accessible to everyone. We bridge the gap between
                patients and doctors through innovative technology and
                compassionate care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/appointments" className="btn btn-primary btn-lg">
                  Book an Appointment
                </Link>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
                alt="Modern Healthcare"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-primary">2018</div>
                <div className="text-gray-600">Founded with a vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the growing community of patients and doctors who choose
              CareBook for better healthcare experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2"
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-blue-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary to-blue-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">
                      {getStatIcon(index)}
                    </span>
                  </div>

                  {/* Stat Number with Counter Animation */}
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>

                  {/* Stat Label */}
                  <div className="text-gray-600 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-linear-to-r from-primary to-blue-600 h-1 rounded-full transition-all duration-1000 delay-200"
                      style={{ width: getProgressWidth(index) }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-gray-200/50">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Verified Doctors</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Secure Platform</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize healthcare by creating a platform that makes it
                easy for anyone to find and book appointments with qualified
                medical professionals, regardless of their location or
                background.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Accessibility
                    </h4>
                    <p className="text-gray-600">
                      Making healthcare available to everyone, everywhere
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality</h4>
                    <p className="text-gray-600">
                      Ensuring all doctors are verified and highly qualified
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">
                      Using technology to simplify healthcare processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where accessing quality healthcare is as
                simple as tapping a button. Where geographical barriers no
                longer prevent people from getting the medical attention they
                need and deserve.
              </p>
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">
                  The Future We&apos;re Building
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Instant access to medical specialists worldwide</li>
                  <li>• AI-powered health recommendations</li>
                  <li>• Integrated electronic health records</li>
                  <li>• Telemedicine for routine consultations</li>
                  <li>• Personalized healthcare journeys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at CareBook and shape
              our interactions with patients and healthcare providers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of healthcare professionals, technologists, and
              innovators working together to transform the patient experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative inline-block mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {member.specialty}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have transformed their healthcare
            journey with CareBook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-0"
            >
              Book Your First Appointment
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
