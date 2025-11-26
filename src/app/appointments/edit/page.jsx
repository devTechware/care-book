"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditAppointmentPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useSearchParams();

  const appointmentId = params.get("id");

  const [loading, setLoading] = useState(true);
  const [appointment, setAppointment] = useState(null);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    symptoms: "",
  });

  // Redirect if user not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  // Fetch appointment data
  useEffect(() => {
    async function fetchAppointment() {
      if (!appointmentId) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments?email=${session?.user?.email}`
      );
      const allAppointments = await res.json();
      const found = allAppointments.find((a) => a._id === appointmentId);

      setAppointment(found);
      setFormData({
        date: found?.date || "",
        time: found?.time || "",
        symptoms: found?.symptoms || "",
      });

      setLoading(false);
    }

    if (session?.user?.email) {
      fetchAppointment();
    }
  }, [appointmentId, session]);

  // Handle changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Update appointment
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments/${appointmentId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Update failed");
      return;
    }

    alert("Appointment updated successfully!");
    router.push("/appointments/manage");
  };

  if (loading || status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!appointment) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-center text-gray-600">Appointment not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Edit Appointment
      </h1>

      {/* Doctor Info */}
      <div className="card bg-base-100 shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold">{appointment.doctorName}</h2>
        <p className="text-gray-600">{appointment.specialty}</p>
        <p className="text-sm text-gray-500">{appointment.hospital}</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 p-6 shadow-lg space-y-5"
      >
        {/* Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Date</span>
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
            <span className="label-text font-semibold">Time</span>
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

        {/* Symptoms */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Symptoms / Notes</span>
          </label>
          <textarea
            name="symptoms"
            rows={3}
            value={formData.symptoms}
            onChange={handleChange}
            className="textarea textarea-bordered"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update Appointment
        </button>
      </form>
    </div>
  );
}
