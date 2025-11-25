'use client';

import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import Link from "next/link";

export default function DoctorsSection() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data.slice(0, 6)));
  }, []);

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Our Expert Doctors</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {doctors.map((doc) => (
            <DoctorCard key={doc._id} doctor={doc} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/doctors" className="btn btn-primary">
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}