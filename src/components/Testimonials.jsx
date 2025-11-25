"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient",
      location: "New York",
      rating: 5,
      content:
        "CareBook made finding the right specialist so easy! I booked my appointment in minutes and the doctor was absolutely wonderful. The platform is incredibly user-friendly.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      treatment: "Cardiology Consultation",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      location: "San Francisco",
      rating: 5,
      content:
        "As someone with a busy schedule, CareBook has been a lifesaver. I can book appointments during my breaks and the reminder system ensures I never miss one.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      treatment: "Regular Checkups",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Teacher",
      location: "Chicago",
      rating: 5,
      content:
        "The verified doctors on CareBook give me so much peace of mind. I found a fantastic pediatrician for my kids and the booking process was seamless.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      treatment: "Pediatric Care",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Cardiologist",
      location: "Boston",
      rating: 5,
      content:
        "As a healthcare provider, I appreciate how CareBook streamlines my schedule and connects me with patients who truly need my expertise. It's revolutionized my practice.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      treatment: "Healthcare Provider",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Manager",
      location: "Austin",
      rating: 5,
      content:
        "I was able to find a specialist for my specific condition that I couldn't find through traditional methods. CareBook's search filters are incredibly helpful!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      treatment: "Specialist Consultation",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial, isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-linear-to-br from-gray-50 to-blue-50/30"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>💬</span>
            Patient Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Loved by{" "}
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Patients & Doctors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of patients and healthcare professionals
            trust CareBook for their medical needs.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto">
          <div
            className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Testimonial Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <span key={i} className="text-amber-400 text-xl">
                          ★
                        </span>
                      )
                    )}
                    <span className="text-gray-500 ml-2">5.0 Rating</span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-primary/20">
                      &quot;
                    </span>
                    <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed relative z-10">
                      {testimonials[currentTestimonial].content}
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="relative">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        width={60}
                        height={60}
                        className="rounded-full border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].role} •{" "}
                        {testimonials[currentTestimonial].location}
                      </p>
                      <p className="text-primary text-sm font-medium">
                        {testimonials[currentTestimonial].treatment}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "bg-primary w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="p-3 rounded-full border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-3 rounded-full border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Section */}
              <div className="bg-linear-to-br from-primary to-blue-600 relative overflow-hidden flex items-center justify-center p-8">
                <div className="text-center text-white space-y-6 relative z-10">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold">Join Our Community</h3>
                  <p className="text-blue-100 text-lg">
                    {testimonials.length}+ Happy Stories
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-blue-100 text-sm">
                        Verified Doctors
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">10K+</div>
                      <div className="text-blue-100 text-sm">
                        Patients Served
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-gray-600 text-sm">Patient Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary">5 min</div>
              <div className="text-gray-600 text-sm">Average Booking Time</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-gray-600 text-sm">Verified Doctors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
