import BannerHome from "@/app/components/banner/BannerHome";
import Image from "next/image";
import Title from "@/app/components/title/Title";
import SongList from "@/app/components/songlist/SongList";
import SongList2 from "@/app/components/songlist2/SongList2";
import SongList3 from "@/app/components/songlist3/songlist3";
import Section1 from "./Section1";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section2 from "./Section2";
import Section3 from "./Section3";
export default function Home() {

  return (
    <>
      {/* section 1 */}
      <Section1/>

      <div className=" flex items-start justify-between ">
        {/* section 01 */}
        <div className="mr-[10px]">
          <Section01/>
        </div>
        <div className="flex-1 ml-[10px]">
          {/* section 02 */}
          <Section02/>
        </div>
      </div>

      {/* section 2 */}
      <Section2/>

      {/* section 3 */}
      <Section3/>
    </>
  );
}
