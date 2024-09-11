import SongItem4 from "./SongItem4";

export default function SongList4(props: any) {
    const { data } = props;
    return (
        <>
            <div className="grid grid-col-1 ">
                {data.map((item: any, index:number) => (
                    <SongItem4
                        key={index}
                        title={item.title}
                        image={item.image}
                        singer={item.singer}
                        time={item.time}
                        link={item.link}
                        audio={item.audio}
                    />
                ))}
            </div>
        </>
    )
}