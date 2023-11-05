import { db } from "../firebase/firebase";
import { Album } from "./types";

export const getAlbums = async () => {
    const albumsRef = db.ref('/albums');
    const dataSnapshot = await albumsRef.once('value');

    const vals = dataSnapshot.val() as Album[];

    if (vals) {
        vals.forEach((val) => {
            val.date = new Date(val.release_date);
        });
        vals.sort((a, b) => {
            return a.date!.getTime() - b.date!.getTime();
        });

        return vals;
    }

    return [];
}

export const getAlbum = async (id: number) => {
    const albumsRef = db.ref('/albums');
    const dataSnapshot = await albumsRef.once('value');

    const vals = dataSnapshot.val() as Album[];

    if (vals) {
        const album = vals.find((val) => {
            return val.id == id;
        });

        if (album) {
            album.date = new Date(album.release_date);
            return album;
        }
    }

    return null;
}