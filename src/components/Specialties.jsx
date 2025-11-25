import Image from "next/image";

export default function Specialties() {
  const specialties = [
    {
      name: "Cardiology",
      description: "Heart and cardiovascular care from top cardiologists",
      icon: "❤️",
      doctors: 85,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop",
      gradient: "from-red-500 to-pink-500"
    },
    {
      name: "Dermatology",
      description: "Skin care and treatment for all dermatological conditions",
      icon: "🔬",
      doctors: 64,
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=300&h=200&fit=crop",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      name: "Pediatrics",
      description: "Specialized care for children and adolescent health",
      icon: "👶",
      doctors: 92,
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Orthopedics",
      description: "Bone, joint, and muscle treatment and surgery",
      icon: "🦴",
      doctors: 78,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Neurology",
      description: "Brain and nervous system disorder treatment",
      icon: "🧠",
      doctors: 56,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "General Medicine",
      description: "Comprehensive primary care for all ages",
      icon: "🩺",
      doctors: 125,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🎯</span>
            Find by Specialty
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Medical{" "}
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Specialties
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with specialized doctors across various medical fields for comprehensive healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={specialty.name} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={specialty.image}
                  alt={specialty.name}
                  width={400}
                  height={150}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-linear-to-br ${specialty.gradient} opacity-20`}></div>
                <div className="absolute top-4 left-4 text-2xl bg-white/90 rounded-lg p-2">
                  {specialty.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    {specialty.doctors}+ Doctors
                  </div>
                  <button className="btn btn-sm btn-primary">
                    Find Doctors
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}