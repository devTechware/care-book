"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ManageAppointmentsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  // Fetch appointments for logged-in user
  useEffect(() => {
    if (!session?.user?.email) return;

    async function fetchAppointments() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments?email=${session.user.email}`
      );

      const data = await res.json();
      setAppointments(data);
      setLoading(false);
    }

    fetchAppointments();
  }, [session]);

  // Delete appointment
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (!res.ok) return alert(data.message || "Delete failed");

    alert("Appointment deleted!");

    // Refresh list
    setAppointments((prev) => prev.filter((a) => a._id !== id));
  };

  // Edit appointment → redirect to edit page
  const handleEdit = (id) => {
    router.push(`/appointments/edit?id=${id}`);
  };

  if (loading || status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Manage Appointments
      </h1>

      {appointments.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          You have no appointments yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Symptoms</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((app, index) => (
                <tr key={app._id}>
                  <td>{index + 1}</td>
                  <td>
                    <span className="font-semibold text-primary">
                      {app.doctorName}
                    </span>
                    <br />
                    <span className="text-xs text-gray-500">
                      {app.specialty}
                    </span>
                  </td>
                  <td>{app.date}</td>
                  <td>{app.time}</td>
                  <td className="max-w-xs line-clamp-2">{app.symptoms}</td>
                  <td>
                    <span className="badge badge-primary badge-outline">
                      {app.status || "Pending"}
                    </span>
                  </td>
                  <td className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(app._id)}
                      className="btn btn-sm btn-info text-white"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(app._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}
