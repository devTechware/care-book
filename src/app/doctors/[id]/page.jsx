"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";

export default function DoctorDetailsPage({ params }) {
  // Unwrap async params (Next.js 15+)
  const { id } = use(params);

  const router = useRouter();
  const { data: session } = useSession();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch doctor details
  useEffect(() => {
    async function fetchDoctor() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/doctors/${id}`
        );

        const data = await res.json();
        setDoctor(data);
      } catch (error) {
        console.error("Doctor fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctor();
  }, [id]);

  // Handle Appointment Button
  const handleAppointment = () => {
    if (!session) return router.push("/login");
    router.push(`/appointments/book?doctor=${id}`);
  };

  // Loading State
  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  // Not Found
  if (!doctor)
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Doctor not found.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">

      <div className="card bg-base-100 shadow-xl p-6 rounded-2xl">

        {/* Doctor Image */}
        <div className="flex justify-center">
          <Image
            src={doctor.image}
            width={350}
            height={350}
            alt={doctor.name}
            className="rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Doctor Details */}
        <div className="mt-6 space-y-5">

          <h1 className="text-3xl font-bold text-primary">{doctor.name}</h1>

          <p className="text-lg font-medium text-gray-700">{doctor.specialty}</p>

          {/* Hospital */}
          <p className="text-gray-600">
            <strong>Hospital:</strong> {doctor.hospital}
          </p>

          {/* Degrees */}
          <p className="text-gray-600">
            <strong>Degrees:</strong> {doctor.degrees}
          </p>

          {/* Experience */}
          <p className="text-gray-600">
            <strong>Experience:</strong> {doctor.experience}
          </p>

          {/* Rating */}
          <p className="text-gray-600">
            <strong>Rating:</strong> ⭐ {doctor.rating}
          </p>

          {/* Fee */}
          <p className="text-gray-600">
            <strong>Consultation Fee:</strong> {doctor.consultationFee} BDT
          </p>

          {/* Available Days */}
          <p className="text-gray-600">
            <strong>Available Days:</strong>{" "}
            <span className="text-primary">
              {doctor.availableDays?.join(", ")}
            </span>
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{doctor.about}</p>

          {/* Appointment Button */}
          <button
            onClick={handleAppointment}
            className="btn btn-primary mt-4 w-full md:w-auto"
          >
            Book Appointment
          </button>

        </div>
      </div>
    </div>
  );
}
