"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function GlobalContact() {
  return (
    <div>
      <a
        href="https://wa.me/+8801863945101"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50 text-3xl"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
