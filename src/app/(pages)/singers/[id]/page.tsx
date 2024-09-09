import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";

export default function SingerDetailPage(){
    return (
        <>
          {/* CardInfo */}
          <CardInfo
            image="/demo/images.jpeg"
            title="Lana Del Rey"
            description=" "
          />
          {/* Section 2: Danh sách bài hát*/}
          <Section2/>
        </>
      );
}