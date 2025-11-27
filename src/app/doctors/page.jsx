'use client';

import { useEffect, useState } from "react";
import DoctorCard from "@/components/DoctorCard";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctors`)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>👨‍⚕️</span>
              Our Doctors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Medical Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our qualified doctors and specialists ready to provide you with the best medical care
            </p>
          </div>
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>👨‍⚕️</span>
            Our Doctors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Complete <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Medical Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All our qualified doctors and specialists ready to provide you with the best medical care
          </p>
        </div>

        {/* Doctors Grid */}
        {doctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}