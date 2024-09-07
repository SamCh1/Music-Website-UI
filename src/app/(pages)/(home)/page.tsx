import BannerHome from "@/app/components/banner/BannerHome";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* section 1 */}
      <div className="flex items-start relative">
        <BannerHome/>
        <div className="flex-1 ml-[20px]">
          Nghe nhieu
        </div>
      </div>
    </>
  );
}
