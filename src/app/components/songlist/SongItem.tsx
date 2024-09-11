import Link from "next/link";

export default function SongItem(props: any){
    const { image = " ", title= " ", singer = " "} = props;
    
    return(
        <>
            <Link href="" className="h-[280px] w-auto rounded-[18px] hover:border hover:border-third p-[5px] ">
                <div className="text-center">
                    <div className="h-[200px] w-[200px]">
                        <img src={image} alt=" " className="w-full rounded-[18px] object-cover inner-image1"></img>
                    </div>
                    <div className="mt-[20px]">
                        <div className="text-[14px] font-[600] line-clamp-1 inner-title1">
                            {title}
                        </div>
                    </div>
                    <div className="">
                        <div className="text-[12px] font-[500] underline line-clamp-1 inner-singer1">
                            {singer}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )

}