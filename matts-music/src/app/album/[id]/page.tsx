import AlbumInfo from "@/components/AlbumInfo";
import InfoBox from "@/components/InfoBox";
import { getAlbum, getAlbums } from "@/lib/data/albums";
import { Album } from "@/lib/data/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

export async function generateStaticParams() {
  const albums = await getAlbums();
  const paths = albums.map((album) => ({
    params: {
      id: album.id,
    },
  }));

  return paths;
}

export default async function AlbumPage({ params }: Props) {
  const album = await getAlbum(params.id);

  if (!album) {
    return {
      notFound: true,
    };
  }



  return (
    <>
      <section className="container">
        <AlbumInfo album={album} />
      </section>
    </>
  );
}
