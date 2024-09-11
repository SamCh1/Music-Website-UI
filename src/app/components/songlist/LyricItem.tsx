

export default function LyricItem(props: { lyric: string}) {
    const { lyric = "verse: " } = props; 
    return (
        <>
            <div className="ml-[5px] flex-1 w-full h-[280px] border border-third rounded-[12px] p-[5px]">
                <div className="w-full h-full overflow-hidden">
                    <div className="text-primary text-[14px] font-[300] whitespace-pre-line py-[5px] overflow-y-scroll inner-lyric1" style={{ maxHeight: '280px' }}>
                        
                    </div>
                </div>
            </div>
        </>
    )
}