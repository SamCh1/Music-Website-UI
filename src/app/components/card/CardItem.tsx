import Link from "next/link";

export default function CardItem(props:any){
    const { image = " ", title = " ", description = " ",link =" " } = props;
    return(
        <>
            <div className="mb-[20px] mt-[10px]">
                <Link href={link}>
                    <div className="w-full aspect-square rounded-[15px] truncate mb-[10px]">
                        <img src={image} alt="" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="font-[700] text-[18px] text-primary mb-[10px] line-clamp-1">
                        {title}
                    </div>
                    <div className="font-[400] text-[14px] text-primary line-clamp-1">
                        {description}
                    </div>
                </Link>
            </div>
        </>
    )
} 