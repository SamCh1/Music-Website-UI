import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";

export default function SongDetailPage(){
  const lyric = ``;
    return (
      <>
          {/* CardInfo */}
          <CardInfo
            image="/demo/images.jpeg"
            title="Radio"
            description= "Lana Del Rey"
          />

          {/* Section 2: Lời bài hát*/}
          <Section2
            lyric={lyric}
          />
          {/* Section 3: Bài hát cùng ca sĩ*/}
      
      </>

      );
}