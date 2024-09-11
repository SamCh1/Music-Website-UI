import Link from "next/link";

export default function SongItem(props: any){
    const { image = " ", title= " ", singer = " "} = props;
    
    return(
        <>
            <Link href="" className="h-[280px] w-auto rounded-[18px] hover:border hover:border-third p-[5px] ">
                <div className="text-center">
                    <div className="h-[200px] w-[200px]">
                        <img src={image} alt={title} className="w-full rounded-[18px] object-cover"></img>
                    </div>
                    <div className="mt-[5px]">
                        <div className="text-[24px] font-[700]">
                            {title}
                        </div>
                    </div>
                    <div className="">
                        <div className="text-[16px] font-[500] underline">
                            {singer}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )

}