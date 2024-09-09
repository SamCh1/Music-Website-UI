import Title from "@/app/components/title/Title";

export default function Section2(props: {lyric : string}){
    const { lyric =" " } = props;
    return(
        <>
            <div className="mt-[30px]">
                <Title
                    text="Lời bài hát"
                /> 
                <div className="bg-[white] text-secondary rounded-[12px] p-[20px]">{lyric}</div>
            </div>
        </>
    )
}