export default function SongItem3(props:any) {
    const {  top = 0, title = " ", image = " ", singer = " ", listen = 0}= props;

    return(
        <>
            <div className="px-[20px] py-[2px] flex justify-between items-center rounded-[8px] border border-[#000]">
                <div className="text-[24px] font-[900] bg-gradient-to-r from-red-200 via-orange-500 to-red-700 inline-block text-transparent bg-clip-text">
                    {top}
                </div>
                <div className="flex items-center">
                    <div className="w-[66px]">
                        <img src={image} alt={title} className="object-cover  w-full aspect-square truncate rounded-[12px]"></img>
                    </div>
                    <div className="ml-[10px]">
                        <h1 className="font-[700] text-[16px]">{title}</h1>
                        <h1 className="font-[500] text-[14px]">{singer}</h1>  
                    </div>
                </div>
                <div className="font-[300] text-[16px]">{listen.toLocaleString()} lượt</div>
            </div>
        </>
    )
}