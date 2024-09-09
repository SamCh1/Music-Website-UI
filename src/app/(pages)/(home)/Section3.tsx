import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";

const data = [
    {
        image: '/demo/images.jpeg',
        title: "Lana Del Rey",
        description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
        link:""
    },
    {
        image: '/demo/images.jpeg',
        title: "Lana Del Rey",
        description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
        link:""
    },
    {
        image: '/demo/images.jpeg',
        title: "Lana Del Rey",
        description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
        link:""
    },
    {
        image: '/demo/images.jpeg',
        title: "Lana Del Rey",
        description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
        link:""
    },
    {
        image: '/demo/images.jpeg',
        title: "Lana Del Rey",
        description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
        link:""
    },
]

export default function Section3(){
    return(
        <>
            <Title text="Ca sĩ nổi bật"/>
            <CardList data={data}/>
        </>
    )
}