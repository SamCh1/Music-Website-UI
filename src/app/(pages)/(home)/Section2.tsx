import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";



// const data = [
//     {
//         image: '/demo/images.jpeg',
//         title: "Nhạc Âu",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Nhạc Âu",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Nhạc Âu",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Nhạc Âu",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
//     {
//         image: '/demo/images.jpeg',
//         title: "Nhạc Âu",
//         description: "Top 100 Nhạc Âu Mỹ là danh sách có 100 ca khúc hot nhất hiện tại của thể loại nhạc trẻ",
//         link:""
//     },
// ]

export default async function Section2(){
    let result: any = await new Promise((resolve)=>{
        const categoriesRef = ref(dbFirebase,"categories");
        onValue(categoriesRef, async(snapshot) => {
            const data:any = [];
            for(const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id: key,
                    image: value.image,
                    title: value.title,
                    description: value.description
                })
            }
            resolve(data);
        });
    });
    
    result = result.slice(0,5);

    return(
        <>
            <Title text="Danh mục nổi bật"/>
            <CardList data={result}/>
        </>
    )
}