import Link from "next/link";
import { GrFavorite } from "react-icons/gr";
import ButtonPlay from "../button/buttonPlay";

export default function SongItem2(props:any) {
    const {image =" ", title = " ", singer = " ", listen = 0 , audio = " ", lyric = " "} = props;
    return(
        <>
            <div className="flex items-center justify-between border border-third rounded-[15px] p-[5px] mb-[5px] hover:bg-[#ddd9d9]">
                <div className="w-[86px] aspect-square rounded-[12px] truncate mr-[10px]">
                    <img src={image} alt={title}></img>
                </div>
                <div className="mx-[10px] w-[265px]">
                    <div className="">
                        <Link href="" className="text-primary font-[700] text-[16px]"> {title} </Link>
                    </div>
                    <div className="font-[400] text-[16px] mb-[5px] ">
                        {singer}
                    </div>
                    <div className="font-[400] text-[12px] text-third">
                        {listen.toLocaleString()} lượt nghe {/*tolocaleString() để thêm dấu phẩy khi số lên hàng ngàn*/}
                    </div>
                </div>
                <div className="">
                        <ButtonPlay {...props} className="inline-flex items-center justify-center text-[54px] ml-[10px] text-[#444444]"/>
                        <button className="inline-flex items-center justify-center ml-[10px] font-[700] text-[54px] text-[#444444]"><GrFavorite/></button>
                </div>
            </div>
        </>
    )
}