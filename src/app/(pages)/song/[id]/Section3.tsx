import SongList4 from "@/app/components/songlist4/SongList4";
import Title from "@/app/components/title/Title";

export default function Section3(){
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
                    text="Bài hát cùng danh mục"
                /> 
                <SongList4 data={data}/>
            </div>
        </>
    )
}