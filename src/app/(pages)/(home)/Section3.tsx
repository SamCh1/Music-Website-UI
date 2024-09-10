import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { ref, onValue } from "firebase/database";

// const data = [
//     {
//         image: '/demo/images.jpeg',
//         title: "Lana Del Rey",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Lana Del Rey",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Lana Del Rey",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Lana Del Rey",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Lana Del Rey",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
// ]

export default async function Section3(){
    let result :any = await new Promise((resolve) => {
        const singerRef = ref(dbFirebase, "singers")
        onValue(singerRef, async(snapshot) => {
            const data:any = [];
            for(const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id:key,
                    description:value.description,
                    image:value.image,
                    title:value.title
                })
            }
            resolve(data);
        })
    })

    result = result.slice(0,5);

    return(
        <>
            <div className="mt-[30px]">
                <Title text="Ca sĩ nổi bật"/>
                <CardList data={result}/>
            </div>
        </>
    )
}