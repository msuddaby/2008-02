"use client";
import Image from "next/image";
import "vanilla-tilt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Home() {
  return (
    <main className="px-4 py-6 container">
      <section className="h-[50vh]">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex justify-center items-center lg:w-[50%]">
            <h1 className="text-5xl font-semibold text-center p-12 leading-normal">
              My super awesome{" "}
              <span className="text-3xl font-normal text-zinc-400">
                (and somewhat strange)
              </span>{" "}
              record collection.
            </h1>
          </div>
          <div className="lg:w-[50%] flex justify-center items-center">
            <Image
              src="/img/music-has-the-right-to-children.jpg"
              alt="A record player"
              width={400}
              height={400}
              data-tilt
              data-tilt-max="50"
              data-tilt-full-page-listening
              className="drop-shadow-glow"
            />
          </div>
        </div>
      </section>
      <section className="py-6">
        <h4 className="text-4xl font-semibold text-center p-12 leading-relaxed">
          What is this place?
        </h4>
        <p className="text-xl leading-normal text-center">
          This site was created to catalogue my vinyl record collection. I have
          a lot of records, and I wanted to create a place where I could share
          them with others. I also wanted to create a place where I could share
          my passion for music, and the stories behind the records I own. Using
          the power of the internet, I can now share and sell my records with
          anyone in the world. I can also share my passion for music with anyone
          who&apos;s interested.
        </p>
      </section>
      <section className="py-6">
        <h4 className="text-4xl font-semibold text-center p-12 leading-relaxed">
          Where did you get all these records?
        </h4>
        <p className="text-xl leading-normal text-center">
          Over the years, my vinyl record collection has grown significantly. It
          all began with my dad&apos;s extensive assortment, comprising hundreds
          of rock and metal albums that span from the early 1960s to the 1990s.
          Inspired by his collection, I gradually initiated my own, starting
          with a few picks, but my passion for collecting soon led me to acquire
          more and more. While I&apos;ve always been a dedicated fan of
          electronic music, the majority of my collection reflects this genre.
          However, you&apos;ll also find some strange additions...
        </p>
      </section>
      <section>
        <h4 className="text-4xl font-semibold text-center p-12 leading-relaxed">
          How can I buy your records?
        </h4>
        <p className="text-xl leading-normal text-center">
          Sales are done through this website, using Stripe. You can browse my
          collection, and add items to your cart. When you&apos;re ready to
          checkout, you&apos;ll be redirected to a secure checkout page where
          you can enter your payment details. Once your payment has been
          processed, you&apos;ll receive an email confirming your purchase. I
          will then ship your records to you, and you&apos;ll receive a tracking
          number via email.
        </p>
      </section>
      <section>
        <h4 className="text-4xl font-semibold text-center pt-12 pb-6">
          <span>
            <ErrorOutlineIcon className="w-[32px] h-[32px]" />
          </span>{" "}
          NOTICE
        </h4>
        <p className="text-cl leading-normal text-center">
          This website was created for a school project. Although my collection
          is real, the records are not for sale. This website is for
          demonstration purposes only.
        </p>
      </section>
    </main>
  );
}
