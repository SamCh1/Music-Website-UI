export default function PlayInfo() {
    return (
        <>
            <div className="flex items-center w-[218px]">
                <div className="border border-[#000] w-[49px] aspect-square rounded-[50%] truncate">
                    <img
                        src=""
                        alt=""
                        className="w-full h-full object-cover inner-image"
                    />
                </div>
                <div className="ml-[12px]">
                    <div className="font-[700] text-primary mb-[2px] text-[16px] line-clamp-1 inner-title">
                    </div>
                    <div className="font-[700] text-[14px] text-third line-clamp-1 inner-singer">
                    </div>
                </div>
            </div>
        </>
    )
}