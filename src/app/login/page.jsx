"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return alert(data.message || "Invalid credentials.");
      }

      localStorage.setItem("carebook_token", data.token);

      router.push("/");
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In will be enabled after NextAuth setup.");
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">
            Welcome to <span className="text-primary">Care-Book</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Log in to book your doctor appointments
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">

            {/* Google Login */}
            <button
              onClick={handleGoogleSignIn}
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
              Continue with Google
            </button>

            <div className="divider">OR</div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <br/>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary w-full ${
                    loading ? "loading" : ""
                  }`}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            {/* Demo Credentials */}
            <div className="alert alert-info mt-4 text-xs">
              <strong>Demo Credentials:</strong> <br />
              Email: demo@carebook.com <br />
              Password: demo
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <a href="/register" className="link link-primary font-semibold">
                  Sign up
                </a>
              </p>

              <p className="text-xs text-gray-500 mt-2">
                By continuing, you agree to our{" "}
                <a href="/terms" className="link link-primary">
                  Terms
                </a>{" "}
                and{" "}
                <a href="/privacy" className="link link-primary">
                  Privacy Policy
                </a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
