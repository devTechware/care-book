"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔹 Handle Input Changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 🔹 Handle Form Submit (fetch → Express backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return alert(data.message || "Registration failed.");
      }

      alert("Registration successful! Please log in.");
      router.push("/login");
    } catch (err) {
      console.error("Register error:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">
            Create Your <span className="text-primary">Care-Book</span> Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us to book appointments with trusted doctors.
          </p>
        </div>

        {/* Register Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">

            {/* Google Signup */}
            <button
              onClick={() => alert("Google Sign-Up will be enabled after NextAuth setup.")}
              disabled={loading}
              className="btn btn-outline w-full hover:btn-primary transition-all"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <Image
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  width={20}
                  height={20}
                  alt="Google icon"
                  className="mr-2"
                />
              )}
              Sign Up with Google
            </button>

            <div className="divider">OR</div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="input input-bordered"
                />
              </div>

              {/* Submit */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary w-full ${
                    loading ? "loading" : ""
                  }`}
                >
                  {loading ? "Creating account..." : "Sign Up"}
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="link link-primary font-semibold">
                  Login
                </a>
              </p>

              <p className="text-xs text-gray-500 mt-2">
                By signing up, you agree to our{" "}
                <a href="/terms" className="link link-primary">Terms</a>{" "}
                and {" "}
                <a href="/privacy" className="link link-primary">Privacy Policy</a>.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
