"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

// Move the main content to a separate component
function EditAppointmentContent() {
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
  }, [status, router]);

  // Fetch appointment data
  useEffect(() => {
    async function fetchAppointment() {
      if (!appointmentId) {
        router.push("/appointments/manage");
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments?email=${session?.user?.email}`
        );

        if (!res.ok) throw new Error("Failed to fetch appointments");

        const allAppointments = await res.json();
        const found = allAppointments.find((a) => a._id === appointmentId);

        if (!found) {
          alert("Appointment not found");
          router.push("/appointments/manage");
          return;
        }

        setAppointment(found);
        setFormData({
          date: found.date || "",
          time: found.time || "",
          symptoms: found.symptoms || "",
        });
      } catch (error) {
        console.error("Error fetching appointment:", error);
        alert("Failed to load appointment");
        router.push("/appointments/manage");
      } finally {
        setLoading(false);
      }
    }

    if (session?.user?.email && appointmentId) {
      fetchAppointment();
    }
  }, [appointmentId, session, router]);

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

    try {
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
    } catch (error) {
      console.error("Error updating appointment:", error);
      alert("Something went wrong");
    }
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
            placeholder="Describe your symptoms..."
          ></textarea>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.push("/appointments/manage")}
            className="btn btn-outline flex-1"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary flex-1">
            Update Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

// Main component with Suspense boundary
export default function EditAppointmentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }
    >
      <EditAppointmentContent />
    </Suspense>
  );
}
