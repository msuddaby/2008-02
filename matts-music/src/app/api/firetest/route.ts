import { NextResponse } from 'next/server';
import { getAlbums } from '@/lib/data/albums';


export async function GET(request: Request) {
    const res = await getAlbums();
    return NextResponse.json(res);
}