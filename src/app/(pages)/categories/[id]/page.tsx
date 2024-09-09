import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";

export default function SongByIdPage(){
    return (
      <>
        {/* Section 1 */}
        <CardInfo
          image="/demo/images.jpeg"
          title="Nhạc Âu"
          description="Top 100 Nhạc Âu là danh sách 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ, Được tích tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản của Web. Dữ liệu lấy trong 30 ngày gần nhất và được cập nhật liên tục"
        />

        {/* Section 2*/}
        <Section2/>
      </>

      );
}