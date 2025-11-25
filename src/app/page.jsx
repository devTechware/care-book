import DoctorsSection from "@/components/DoctorsSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <DoctorsSection />
      <Specialties />
      <Features />
      <Testimonials />
    </>
  );
}
