'use client';

import LyricItem from "./LyricItem";
import SongItem from "./SongItem";


const data: any =
    {
        image:"/demo/image2.jpg",
        title:"Play Audio",
        singer:"unknow",
        lyric:` verse:
                Not even rain and stormy nights
                Boy I'd be flying overhead
                Your heavy words can bring me down
                Boy I've been raised from the dead

                No one even knows how hard life was
                I don't even think about it now because
                I've finally found you
                Oh, sing it to me

                Now my life is sweet like cinnamon
                It's a fucking dream I'm living in
                Baby that's because I'm playing on the radio

                Pick me up and take me like a real man
                'Cause my body's sweet like sugar in the morning yeah
                Baby that's because I'm playing on the radio

                And even dreams came true somehow
                [?] I was there
                [?]
                That's what my father said

                No one even knows what life was like
                Now I'm in LA and it's paradise
                Because I finally found you

                Now my life is sweet like cinnamon
                It's a fucking dream I'm living in
                Baby that's because I'm playing on the radio

                Pick me up and take me like a real man
                And my body's sweet like sugar in the morning yeah
                Baby that's because I'm playing on the radio`
    }

export default function SongList() {
    return (
        <>
            <div className="flex items-center justify-between">
                <SongItem
                    image={data.image}
                    title={data.title}
                    singer={data.singer}
                />
                {/*Lyric*/}
                <LyricItem lyric = {data.lyric}/>
            </div>
        </>
    );
}
