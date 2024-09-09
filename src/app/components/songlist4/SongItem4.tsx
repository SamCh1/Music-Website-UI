import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";

export default function SongItem4(props: any) {
    const { image = " ", title = " ", singer = " ", time = 0} = props;
    return (
        <>
            <div className="flex items-center justify-between py-[10px] px-[10px] border-y border-third border-collapse	">
                { /* Left */}
                <div className="w-[40%] flex items-center">
                    <button className="text-[24px] text-third hover:text-primary hover:text-[28px]"><RiNeteaseCloudMusicLine /></button>
                    <div className="w-[42px] aspect-square truncate mx-[12px] rounded-[8px]">
                        <img src={image} alt={title} className="w-full h-full object-cover"></img>
                    </div>
                    <div className="text-primary font-[700] text-[16px]">
                        {title}
                    </div>
                </div>

                { /* center */}
                <div className="w-[30%] text-center">
                    <div className="text-primary text-[16px]">
                        {singer}
                    </div>
                </div>

                { /* Right */}
                <div className="w-[30%] text-right flex items-center justify-end">
                    <div className="font-[400] text-[16px] mr-[18px] text-primary">
                        {time}
                    </div>
                    <button className="text-[16px] text-primary hover:text-[24px]"> <GrFavorite /> </button>
                </div>
            </div>
        </>
    )
}