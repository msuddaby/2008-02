"use client";
import { Album } from "@/lib/data/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "vanilla-tilt";
import VanillaTilt from "vanilla-tilt";

export default function Card({ album }: { album: Album }) {
  const genres = album.genre.split(",");

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("#tilt-image") as any, {
      max: 50,
      scale: 1.1,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <motion.div

      key={album.id}
      className="bg-gradient-to-t from-zinc-950 to-zinc-900 rounded-xl px-3 py-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[256px] h-[256px] md:w-[400px] md:h-[400px] relative mb-3">
        <Link href={`/album/${album.id}`}>
          <Image
            src={`/img/${album.album_cover}`}
            alt={`Album cover for "${album.album_title}" by ${album.artist}`}
            id={`tilt-image`}
            fill
            quality={50}
            sizes="400px"
            className="rounded-xl absolute hover:shadow-lg hover:shadow-zinc-700 transition-shadow duration-100 ease-in-out object-cover overflow-hidden"
          />
        </Link>
      </div>
      <div className="mb-3 text-center">
        <h3 className="text-md font-light text-zinc-400 tracking-widest whitespace-break-spaces">
          {album.artist.toUpperCase()}
        </h3>
        <h4 className="text-2xl font-semibold whitespace-break-spaces">
          <Link href={`/album/${album.id}`}>{album.album_title}</Link>
        </h4>
      </div>
      <div className="mb-3 text-center text-zinc-400">
        <p className="text-sm font-light">
          Released &middot; {album.date!.toDateString()}
        </p>
        <p className="text-sm font-light">
          {album.number_of_tracks} tracks &middot; Runtime {album.duration}
        </p>
      </div>
      <div>
        <ul className="text-sm font-light list-none flex flex-wrap justify-center gap-2 my-3">
          {genres.map((genre) => (
            <li
              key={genre}
              className="border-2 rounded-2xl py-1 px-3
                hover:border-2 hover:bg-gradient-to-l hover:border-zinc-950  hover:font-semibold from-cyan-300 to-fuchsia-600 hover:text-zinc-800  transition-all duration-300 ease-in-out cursor-pointer
            "
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <p className="p-2 text-center text-zinc-200">
        {album.description.length > 256 ? (
          <span>{album.description.slice(0, 256)}...</span>
        ) : (
          <span>{album.description}</span>
        )}
      </p>
    </motion.div>
  );
}
