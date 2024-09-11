
import SongList4 from "@/app/components/songlist4/SongList4";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section2(props: { singerId: string }){

    const { singerId } = props;
    const result: any = await new Promise((resolve)=>{
        const songsRef = ref(dbFirebase, "songs");
        onValue(songsRef, (snapshot) => {
            const data =[];
            for(const key in snapshot.val()){
                const value = snapshot.val()[key];
                if(value.singerId.includes(singerId)){
                    data.push({
                        id: key,
                        image: value.image,
                        title: value.title,
                        listen: value.listen,
                        singerId: value.singerID,
                        link: `/song/${key}`
                    });
                }
            }
            resolve(data)
        })
    })
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách Bài hát"/>
                <SongList4 data={result}/>
            </div>
        </>
    )
}