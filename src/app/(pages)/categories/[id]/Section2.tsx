
import SongList4 from "@/app/components/songlist4/SongList4";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section2(props: {id: string}){
    const { id } = props;
    let result: any = await new Promise((resolve)=>{
        const songsRef = ref(dbFirebase, "songs");
        const songsQuery = query(songsRef, orderByChild("categoryId"), equalTo(id)); 
        onValue(songsQuery, (snapshot) => {
            const data = [];
            for(const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id: key,
                    title : value.title,
                    image: value.image,
                    audio: value.audio,
                    listen: value.listen,
                    link: `/song/${key}`
                })
            }
            resolve(data);
        })
    })
    
    // const data: any =  [
    //     {
    //         image:"/demo/images.jpeg",
    //         title:"Radio",
    //         singer:"Lana Del Rey",
    //         time:"4:32"
    //     },
    //     {
    //         image:"/demo/images.jpeg",
    //         title:"Radio",
    //         singer:"Lana Del Rey",
    //         time:"4:32"
    //     },
    //     {
    //         image:"/demo/images.jpeg",
    //         title:"Radio",
    //         singer:"Lana Del Rey",
    //         time:"4:32"
    //     },
    //     {
    //         image:"/demo/images.jpeg",
    //         title:"Radio",
    //         singer:"Lana Del Rey",
    //         time:"4:32"
    //     },
    // ]
    
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách"/>
                <SongList4 data={result}/>
            </div>
        </>
    )
}