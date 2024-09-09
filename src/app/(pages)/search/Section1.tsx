import SongList4 from "@/app/components/songlist4/SongList4";
import Title from "@/app/components/title/Title";

export default function Section1(){
    const data: any = [
        {
            image:'/demo/images.jpeg',
            title:"radio",
            singer:"Lana Del Rey",
            time: "4:20"
        },
        {
            image:'/demo/images.jpeg',
            title:"radio",
            singer:"Lana Del Rey",
            time: "4:20"
        },
        {
            image:'/demo/images.jpeg',
            title:"radio",
            singer:"Lana Del Rey",
            time: "4:20"
        },
        {
            image:'/demo/images.jpeg',
            title:"radio",
            singer:"Lana Del Rey",
            time: 420
        },
    ]
    return(
        <>
            <div className="mt-[30px]">
                <Title
                    text="Kết quả tìm kiếm"
                /> 
                <SongList4 data={data}/>
            </div>
        </>
    )
}