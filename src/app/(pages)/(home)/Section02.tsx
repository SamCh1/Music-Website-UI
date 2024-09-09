import SongList3 from "@/app/components/songlist3/songlist3";
import Title from "@/app/components/title/Title";

const data: any= [
    {
        image:"https://thoidai.com.vn/stores/news_dataimages/2024/092024/04/09/maxresdefault20240904092019.jpg?rt=20240904092022",
        title:"Bình Yên",
        singer:"Vũ, Binz",
        listen: 2564000
    },
    {
        image:"https://thoidai.com.vn/stores/news_dataimages/2024/092024/04/09/maxresdefault20240904092019.jpg?rt=20240904092022",
        title:"Bình Yên",
        singer:"Vũ, Binz",
        listen: 2564000
    },
    {
        image:"https://thoidai.com.vn/stores/news_dataimages/2024/092024/04/09/maxresdefault20240904092019.jpg?rt=20240904092022",
        title:"Bình Yên",
        singer:"Vũ, Binz",
        listen: 2564000
    },
    {
        image:"https://thoidai.com.vn/stores/news_dataimages/2024/092024/04/09/maxresdefault20240904092019.jpg?rt=20240904092022",
        title:"Bình Yên",
        singer:"Vũ, Binz",
        listen: 2564000
    },

]

export default function Section01(){
    return(
        <>
            <Title text="Top bài hát" />
            <SongList3 data={data}/>
        </>
    )
}