
import SongList4 from "@/app/components/songlist4/SongList4";
import Title from "@/app/components/title/Title";

export default function Section2(){
    const data: any =  [
        {
            image:"/demo/images.jpeg",
            title:"Radio",
            singer:"Lana Del Rey",
            time:"4:32"
        },
        {
            image:"/demo/images.jpeg",
            title:"Radio",
            singer:"Lana Del Rey",
            time:"4:32"
        },
        {
            image:"/demo/images.jpeg",
            title:"Radio",
            singer:"Lana Del Rey",
            time:"4:32"
        },
        {
            image:"/demo/images.jpeg",
            title:"Radio",
            singer:"Lana Del Rey",
            time:"4:32"
        },
    ]
    
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách Bài hát"/>
                <SongList4 data={data}/>
            </div>
        </>
    )
}