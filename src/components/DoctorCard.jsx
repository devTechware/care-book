import Image from "next/image";
import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
            <span className="text-amber-400 text-sm">★</span>
            <span className="text-xs font-semibold text-gray-700">
              {doctor.rating}
            </span>
          </div>
        </div>

        {/* Experience Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            {doctor.experience}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Name and Specialty */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {doctor.name}
          </h3>
          <p className="text-primary font-semibold">{doctor.specialty}</p>
        </div>

        {/* Hospital */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {doctor.hospital}
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2 text-sm">
          {doctor.about}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            Fee:{" "}
            <span className="font-bold text-primary">
              {doctor.consultationFee} BDT
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Available
          </div>
        </div>

        {/* Action Button */}
        <div className="flex gap-2">
          <Link
            href={`/doctors/${doctor._id}`}
            className="btn btn-outline btn-sm flex-1 group-hover:btn-primary transition-all"
          >
            View Profile
          </Link>
          <Link
            href={`/appointments/book?doctor=${doctor._id}`}
            className="btn btn-primary btn-sm flex-1"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
