import SongList2 from "@/app/components/songlist2/SongList2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { ref, onValue } from "firebase/database";




// const data:any = [
//     {
//       image:"/demo/images.jpeg",
//       title:"Radio",
//       singer:"Lana Del Rey",
//       listen: 2344000
//     },
//     {
//       image:"/demo/images.jpeg",
//       title:"Radio",
//       singer:"Lana Del Rey",
//       listen: 2344000
//     },
//     {
//       image:"/demo/images.jpeg",
//       title:"Radio",
//       singer:"Lana Del Rey",
//       listen: 2344000
//     }
//   ]

export default async function Section01(){
  let result: any = await new Promise((resolve)=>{
    const songRef = ref(dbFirebase, "songs");
    onValue(songRef, async (snapshot) => {
      const data: any = [];
      for(const key in snapshot.val()){
        const value = snapshot.val()[key];
        data.push(
          {
            id: key,
            image: value.image,
            title:value.title,
            audio: value.audio,
            listen: value.listen,
            singer: " abc, efg "
          }
        )
      }
      resolve(data);
    })
  }) 

  result = result.slice(0,3);

    return(
        <>
            <Title text="nhiều lượt nghe" />
            <SongList2 data={result}/>
        </>
    )
}