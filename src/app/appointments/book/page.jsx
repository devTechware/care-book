"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppointmentBookingPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const params = useSearchParams();

  const doctorId = params.get("doctor");

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    symptoms: "",
  });

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  // Fetch doctor by ID
  useEffect(() => {
    async function fetchDoctor() {
      if (!doctorId) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/doctors/${doctorId}`
      );
      const data = await res.json();
      setDoctor(data);
      setLoading(false);
    }

    fetchDoctor();
  }, [doctorId]);

  // Handle input change
  const handleChange = (e) => {
    setFormData((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit appointment
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      doctorId,
      userEmail: session?.user?.email,
      ...formData,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (!res.ok) return alert(data.message);

      alert("Appointment booked successfully!");
      router.push("/appointments/manage");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  if (status === "loading" || loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-primary text-center">
        Book Appointment
      </h1>

      {/* Doctor Info Card */}
      <div className="card bg-base-100 shadow-md p-6 mt-6">
        <h2 className="text-xl font-semibold">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialty}</p>
        <p className="text-sm text-gray-500">
          Available: {doctor.availableDays.join(", ")}
        </p>
      </div>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 p-6 shadow-lg mt-6 space-y-5"
      >
        {/* Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Preferred Date</span>
          </label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        {/* Time */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Preferred Time</span>
          </label>
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        {/* Symptoms / Notes */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Symptoms / Notes</span>
          </label>
          <textarea
            name="symptoms"
            rows={3}
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Describe your symptoms..."
            className="textarea textarea-bordered"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}
