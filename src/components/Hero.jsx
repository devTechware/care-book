import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="hero min-h-[85vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10 w-full">
        {/* Left Content - Takes 50% */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Book Your Doctor <span className="text-primary">Effortlessly</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600">
            CareBook helps you find trusted medical professionals and book
            appointments instantly with a smooth, modern experience.
          </p>

          <div className="flex gap-4">
            <a href="/doctors" className="btn btn-primary btn-lg">
              Book Appointment
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Image - Takes 50% */}
        <div className="lg:w-1/2 w-full">
          <Image
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format"
            alt="Doctor Illustration"
            className="w-full h-64 lg:h-80 object-cover drop-shadow-xl rounded-lg"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
}