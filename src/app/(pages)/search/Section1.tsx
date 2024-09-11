"use client"
import SongList4 from "@/app/components/songlist4/SongList4";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1(){
    const searchParams = useSearchParams();
    const keywordDefault = searchParams.get("keyword") || " ";
    const [ data, setData ] = useState([]);
    useEffect(() => {
        const fetchApi = async () =>{
            let result: any = await new Promise((resolve) => {
                const songRef = ref(dbFirebase,"songs");
                onValue(songRef, (snapshot)=>{
                    const data =[];
                    for(const key in snapshot.val()){
                        const value = snapshot.val()[key];
                        data.push({
                            id:key,
                            image: value.image,
                            title:value.title,
                            audio: value.audio,
                            listen: value.listen,
                            link: `/songs/${key}`,
                            lyric: value.lyric
                        })
                    }
                    resolve(data);
                }) 
            })
            
            const regex = new RegExp(keywordDefault, "i");
            result = result.filter((item: any) => regex.test(item.title));
            setData(result);
        } 
        fetchApi();
    },[keywordDefault]);
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