
import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { ref, onValue } from "firebase/database";


export default async function Section1(){
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
    // ];
    let result: any = await new Promise((resolve)=>{
        const categoriesRef= ref(dbFirebase,"categories");
        onValue(categoriesRef, (snapshot)=>{
            const data: any = [];
            for(const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    id:key,
                    image: value.image,
                    title:value.title,
                    description:value.description,
                    link: `/categories/${key}`
                })
            }
            resolve(data);
        })
    })


    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách bài hát"/>
                <CardList data={result}/>
            </div>
        </>
    )
}