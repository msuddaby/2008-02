"use client";
import { Album } from "@/lib/data/types";
import Link from "next/link";
import Image from "next/image";
import InfoBox from "./InfoBox";
import { motion } from "framer-motion";
import BuyNow from "./BuyNow";

type Props = {
  album: Album;
};

export default function AlbumInfo({ album }: Props) {
  const genres = album.genre.split(",");

  console.log(album);

  return (
    <>
      <div className="mx-6 bg-gradient-to-t from-zinc-950 to-zinc-900 rounded-xl px-12 py-6 flex items-center justify-center">
        <div className="flex items-center flex-col justify-center">
          <div className="mb-6">
            <Link href="/albums">
              <span className="text-zinc-400 hover:text-zinc-200">
                &lt; Back to Albums
              </span>
            </Link>
          </div>
          <div className="mb-16 text-center">
            <motion.h3
              className="text-2xl font-light text-zinc-400 tracking-widest whitespace-break-spaces"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              {album.artist.toUpperCase()}
            </motion.h3>
            <motion.h4
              className="text-6xl font-semibold whitespace-break-spaces"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1 }}
            >
              {album.album_title}
            </motion.h4>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div>
              <div className="w-full flex items-center justify-center">
                <motion.div
                  className="w-[256px] h-[256px] md:w-[400px] md:h-[400px] mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 1 }}
                >
                  <Image
                    src={`/img/${album.album_cover}`}
                    alt={`Album cover for "${album.album_title}" by ${album.artist}`}
                    width={400}
                    height={400}
                    priority={true}
                    placeholder="blur"
                    blurDataURL="/img/blur.jpg"
                    className="rounded-xl hover:shadow-lg hover:shadow-zinc-700 transition-shadow duration-100 ease-in-out object-cover"
                  />
                </motion.div>
              </div>
              <div className="mb-3 text-center text-zinc-400">
                <p className="text-sm font-light">
                  Released &middot; {album.date!.toDateString()}
                </p>
                <p className="text-sm font-light">
                  {album.number_of_tracks} tracks &middot; Runtime{" "}
                  {album.duration}
                </p>
              </div>
              <div>
                <ul className="text-sm font-light list-none flex flex-wrap justify-center gap-2 my-3">
                  {genres.map((genre) => (
                    <li
                      key={genre}
                      className="border-2 rounded-2xl py-1 px-3 
                        hover:border-2 hover:bg-gradient-to-l hover:border-zinc-950 hover:font-semibold from-cyan-300 to-fuchsia-600 hover:text-zinc-800  transition-all duration-300 ease-in-out cursor-pointer
                      "
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-12 text-center">
              <h2 className="text-3xl font-light border-b border-zinc-400">
                DESCRIPTION
              </h2>
              <p className="p-2 mb-3 text-center text-zinc-400">
                <span>{album.description}</span>
              </p>
              <h2 className="text-3xl font-light border-b border-zinc-400 mb-6">
                INFO
              </h2>
              <div className="flex gap-3 mb-6">
                <InfoBox header="Label" body={album.record_label} />
                <InfoBox header="Cerficiation" body={album.certification} />
                <InfoBox header="Sales" body={album.sales.toString()} />
              </div>
              <div className="w-full">
                {/* <button className="rounded-2xl text-black bg-zinc-200 w-full py-4 text-xl font-bold transition-all duration-300 hover:bg-zinc-500 ease-in-out">
                                    Buy Now
                                </button> */}
                <BuyNow priceId={album.price} />
              </div>
            </div>
          </div>
          <div className="my-3">
            <p>
              <span className="font-extralight">Produced by:</span>{" "}
              {album.producer} &middot;{" "}
              <span className="font-extralight">Written by:</span>{" "}
              {album.songwriters}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
