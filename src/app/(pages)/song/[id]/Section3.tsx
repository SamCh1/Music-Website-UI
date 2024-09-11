import SongList4 from "@/app/components/songlist4/SongList4";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section3(props: {songId: string, categoryId: string}){
    const { categoryId, songId } = props;
    let result: any = await new Promise((resolve) => {
        const songsRef = ref(dbFirebase, "songs");
        const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(categoryId)); 
        onValue(songsQuery, (snapshot)=> {
            const data: any =[];
            for(const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id:key,
                    title: value.title,
                    image: value.image,
                    listen: value.listen,
                    audio: value.audio,
                    link: `/song/${key}`
                })
            }
            resolve(data);
        })
    })

    result = result.filter((item: any) => item.id !== songId)

    // const data: any = [
    //     {
    //         image:'/demo/images.jpeg',
    //         title:"radio",
    //         singer:"Lana Del Rey",
    //         time: "4:20"
    //     },
    //     {
    //         image:'/demo/images.jpeg',
    //         title:"radio",
    //         singer:"Lana Del Rey",
    //         time: "4:20"
    //     },
    //     {
    //         image:'/demo/images.jpeg',
    //         title:"radio",
    //         singer:"Lana Del Rey",
    //         time: "4:20"
    //     },
    //     {
    //         image:'/demo/images.jpeg',
    //         title:"radio",
    //         singer:"Lana Del Rey",
    //         time: 420
    //     },
    // ]


    return(
        <>
            <div className="mt-[30px]">
                <Title
                    text="Bài hát cùng danh mục"
                /> 
                <SongList4 data={result}/>
            </div>
        </>
    )
}