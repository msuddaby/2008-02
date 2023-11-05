import Card from "@/components/Card";
import { getAlbums } from "@/lib/data/albums";
import { Album } from "@/lib/data/types";

export default async function EmployeePage() {
  const albums = await getAlbums();

  return (
    <div className="container mb-6">
      <div className="flex flex-col items-center text-center justify-center">
        <div className="pb-4 text-center">
          <p className="text-2xl">
            Here&apos;s a strange list of my favourite albums.
          </p>
          <p className="text-sm font-light">
            Hover over the covers to see them in action ;&gt;
          </p>
        </div>
      </div>

      <div className="px-4 mx-6 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-9">
        {albums.map((album: Album) => {
          album.date = new Date(album.release_date);

          return <Card key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
}
