"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function ProjectCard({ project }) {

  return (
    <div>
      <motion.div
        className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-full h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Project Name */}
        <h3 className="text-xl font-bold mb-3">{project.name}</h3>

        {/* Image Carousel */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-60">  {/* Set a fixed height for image container */}
                <Image
                  src={img.src}
                  alt={project.name}
                  layout="fill"  // Makes the image fill the container
                  objectFit="cover"  // Ensures the image covers the container without stretching
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Description */}
        <p className="text-gray-300 my-3">{project.description}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          <a
            href={project.liveLink}
            target="_blank"
            className=" btn bg-white text-black lg:px-6 px-3 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className=" text-white  btn btn-ghost border-white hover:bg-gray-500 px-4 py-2 rounded-md"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
