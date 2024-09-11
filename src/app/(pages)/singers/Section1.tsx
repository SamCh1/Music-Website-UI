
import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";



export default async function Section1(){
    const result :any = await new Promise((resolve) => {
        const singerRef = ref(dbFirebase, "singers");
        onValue(singerRef, (snapshot)=> {
            const data = [];
            for(const key in snapshot.val()){
                const value = snapshot.val()[key];
                data.push({
                    image: value.image,
                    title: value.title,
                    description: value.description,
                    link: `/singers/${key}`
                })
            }
            resolve(data);
        });
    }) 


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
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh sách Ca sĩ"/>
                <CardList data={result}/>
            </div>
        </>
    )
}