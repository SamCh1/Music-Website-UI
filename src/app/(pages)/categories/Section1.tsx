
import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";


export default function Section1(){
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
    ];
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát"/>
                <CardList data={data}/>
            </div>
        </>
    )
}