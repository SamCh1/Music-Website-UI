import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { dbFirebase } from "@/app/firebaseConfig";
import { ref, onValue } from "firebase/database";



export default async function SingerDetailPage(props: {params: {id: string}}){
  const { params } = props;
  const result :any = await new Promise((resolve) => {
      const singersRef = ref(dbFirebase, `singers/${params.id}`);
      onValue(singersRef, async (snapshot)=>{
        const data: any = snapshot.val();
        resolve(data);
      });
  })
  console.log("Fetched data:", result);
    return (
        <>
          {/* CardInfo */}
          <CardInfo
            image={result.image}
            title={result.title}
            description={result.description}
          />
          {/* Section 2: Danh sách bài hát*/}
          <Section2 singerId={params.id}/>
        </>
      );
}