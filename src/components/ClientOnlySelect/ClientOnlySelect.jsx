"use client";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });

export default function ClientOnlySelect(props) {
  return <Select {...props} />;
}
