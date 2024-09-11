import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";


export default async function SongDetailPage(props: {params: {id: string}}){
  const { params } = props;
  const result: any = await new Promise((resolve)=>{
    const songsRef = ref(dbFirebase, `songs/${params.id}`);
    onValue(songsRef, (snapshot)=>{
      const data = snapshot.val();
      resolve(data);
    });
  });  

  if(!result){
    notFound();
  }

  // const lyric = `Verse:
  // Not even rain and stormy nights
  // Boy I'd be flying overhead
  // Your heavy words can bring me down
  // Boy I've been raised from the dead

  // No one even knows how hard life was
  // I don't even think about it now because
  // I've finally found you
  // Oh, sing it to me

  // Now my life is sweet like cinnamon
  // It's a fucking dream I'm living in
  // Baby that's because I'm playing on the radio

  // Pick me up and take me like a real man
  // 'Cause my body's sweet like sugar in the morning yeah
  // Baby that's because I'm playing on the radio

  // And even dreams came true somehow
  // I was there
  // That's what my father said

  // No one even knows what life was like
  // Now I'm in LA and it's paradise
  // Because I finally found you

  // Now my life is sweet like cinnamon
  // It's a fucking dream I'm living in
  // Baby that's because I'm playing on the radio

  // Pick me up and take me like a real man
  // And my body's sweet like sugar in the morning yeah
  // Baby that's because I'm playing on the radio
  // `;
    return (
      <>
          {/* CardInfo */}
          <CardInfo
            image= {result.image}
            title= {result.title}
            description= "Lana Del Rey"
          />

          {/* Section 2: Lời bài hát*/}
          <Section2
            lyric={result.lyric}
          />
          {/* Section 3: Bài hát cùng ca sĩ*/}
          <Section3 
          songId = {params.id}
          categoryId = {result.categoryId}/>
      </>

      );
}