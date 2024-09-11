import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { dbFirebase } from "@/app/firebaseConfig";
import { ref, onValue } from "firebase/database";

{/* {  params } nghĩa là khai báo  { params } = props  */}

export default async function CategoriesByIdPage(props : {params: { id:string }}){
  const { params } = props;
  const result: any = await new Promise((resolve)=>{
    const categoriesRef = ref(dbFirebase, `categories/${params.id}`)
    onValue(categoriesRef, async (snapshot) =>{
      const data:any = snapshot.val();
      resolve(data);
    })
  })
    return (
      <>
        {/* Section 1 */}
        <CardInfo
          image={result.image}
          title={result.title}
          description={result.description}
        />

        {/* Section 2*/}
        <Section2 id = {params.id}/>
      </>

      );
}