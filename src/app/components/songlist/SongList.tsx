'use client';

import SongItem from "./SongItem";

export default function SongList() {
    return (
        <>
            <div className="flex items-center overflow-hidden">
                <SongItem
                    image="/demo/images.jpeg"
                    title="Radio"
                    singer="Lana Del Rey"
                />
            </div>
        </>
    );
}
