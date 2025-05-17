"use client";

import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("./Testimonial"), { ssr: false });

export default function TestimonialClientWrapper() {
  return <Testimonial />;
}
