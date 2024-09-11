import PlayVolume from "./PlayVolume";
import PlayTime from "./PlayTime";
import PlayAction from "./PlayAction";
import PlayInfo from "./PlayInfo";
import PlayAudio from "./PlayAudio";



export default function PlaySong() {
    return (
        <>
            <div className="backdrop-blur-[20px] w-full bottom-0 left-0 py-[20px] px-[20px] fixed z-[999] border-t play-audio hidden">
                {/* Audio */}
                <PlayAudio/>
                
                <div className="container mx-auto flex items-center justify-between">
                    {/* info */}
                    <PlayInfo/>
                    
                    {/* button radio */}
                    <div className="flex-1 mx-[66px]">
                        <PlayAction/>
                        <PlayTime/>
                    
                    </div>
                    {/* volumn */}
                    <PlayVolume/>
                </div>
            </div>
        </>
    );
}
