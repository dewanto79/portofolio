"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const mediaSosial = [
  {
    id: 1,
    image: "/image/icons/instagram.png",
    link: "https://www.instagram.com/dsetyoadji/",
  },
  {
    id: 2,
    image: "/image/icons/linkedin.png",
    link: "https://www.linkedin.com/in/dewanto-surya-setyoadji-5b245116b",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <div className={`text-2xl text-gray-300 shadow-lg sm:text-4xl`}>
        Under Construction
      </div>
      <motion.section
        animate={{
          x: [0, "-20px", 0],
          y: [0, "20px", 0],
          skewX: [0, "5deg", 0],
          skewY: [0, "-5deg", 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className=""
      >
        <Image
          src={`/image/helmet.png`}
          alt="helmet"
          width={400}
          height={400}
          className=""
        />
      </motion.section>
      <section className="flex items-center justify-center gap-4">
        {mediaSosial.map((data, index) => (
          <motion.div
            key={data.id}
            animate={{
              y: [0, "10px"],
            }}
            transition={{
              duration: 1,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className={`flex items-center p-3 border rounded-full bg-gray-300 opacity-60`}
          >
            <Link href={`${data.link}`} target="_blank" className="">
              <Image
                src={`${data.image}`}
                alt="helmet"
                width={40}
                height={40}
                className=""
              />
            </Link>
          </motion.div>
        ))}
      </section>
      <section></section>
    </main>
  );
}
