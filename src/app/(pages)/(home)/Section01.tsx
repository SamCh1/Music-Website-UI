import SongList2 from "@/app/components/songlist2/SongList2";
import Title from "@/app/components/title/Title";

const data:any = [
    {
      image:"/demo/images.jpeg",
      title:"Radio",
      singer:"Lana Del Rey",
      listen: 2344000
    },
    {
      image:"/demo/images.jpeg",
      title:"Radio",
      singer:"Lana Del Rey",
      listen: 2344000
    },
    {
      image:"/demo/images.jpeg",
      title:"Radio",
      singer:"Lana Del Rey",
      listen: 2344000
    }
  ]

export default function Section01(){
    return(
        <>
            <Title text="nhiều lượt nghe" />
            <SongList2 data={data}/>
        </>
    )
}