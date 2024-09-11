import BannerHome from "@/app/components/banner/BannerHome";
import SongList from "@/app/components/songlist/SongList";
import Title from "@/app/components/title/Title";


export default async function Section1() {

    return (
        <>
            <div className="flex items-start justify-between">
                <BannerHome />
                <div className="flex-1 ml-[20px]">
                    <Title text="bài hát đang phát" />
                    <SongList/>
                </div>
            </div>
        </>
    )
}