"use client";

import { useEffect, useState } from "react";
import DoctorCard from "@/components/DoctorCard";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Our Doctors</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <DoctorCard key={doc._id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
