'use client';

import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import Link from "next/link";

export default function DoctorsSection() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctors`)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data.slice(0, 6));
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
              Top Doctors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Expert Doctors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of highly qualified medical professionals
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
            Top Doctors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highly qualified medical professionals dedicated to your health and well-being
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

        {/* View All Button */}
        {doctors.length > 0 && (
          <div className="text-center mt-16">
            <Link href="/doctors" className="btn btn-primary btn-lg px-8">
              View All Doctors
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}