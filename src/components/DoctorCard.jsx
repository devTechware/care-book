import Image from "next/image";
import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border rounded-xl">
      <figure className="px-4 pt-4">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={300}
          className="rounded-xl object-cover h-48 w-full"
        />
      </figure>

      <div className="card-body">
        {/* Name */}
        <h2 className="card-title text-lg font-semibold text-primary">
          {doctor.name}
        </h2>

        {/* Short Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {doctor.about}
        </p>

        {/* Meta */}
        <div className="mt-2 text-sm">
          <p className="font-medium">
            Specialty: <span className="text-primary">{doctor.specialty}</span>
          </p>
          <p className="text-gray-600">
            Fee: <strong>{doctor.consultationFee} BDT</strong>
          </p>
        </div>

        {/* CTA */}
        <div className="card-actions justify-end mt-4">
          <Link href={`/doctors/${doctor._id}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
