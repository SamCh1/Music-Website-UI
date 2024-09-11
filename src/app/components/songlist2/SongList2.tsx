import SongItem2 from "./SongItem2";

export default function SongList2( props: {data: any}){
    const {data} = props;
    return(
        <>
            <div className="grid grid-cols-1 gap-[2px]">
                {data.map((item: any,index: number)=>(
                    <SongItem2
                        key={index}
                        image={item.image}
                        title={item.title}
                        singer={item.singer}
                        listen={item.listen}
                        audio={item.audio}
                        lyric={item.lyric}
                    />
                ))}
            </div>
        </>
    )
}