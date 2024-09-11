'use client'
import { IoPlaySkipBackOutline, IoPlaySkipForwardOutline } from "react-icons/io5";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

export default function PlayAction() {
    const handlePlay = () => {
        const playAudio = document.querySelector(".play-audio");
        const boxButtonPlay: any = playAudio?.querySelector(".box-button-play");
        const elementAudio: any = playAudio?.querySelector(".inner-audio");
        const elementToneArm: any = document.querySelector(".tone-arm");
        const elementRecord: any = document.querySelector(".record");
        if(boxButtonPlay?.classList.contains("play")){
            boxButtonPlay.classList.remove("play");
            elementAudio.pause();
            if(elementToneArm){
                elementToneArm.classList.remove("playing");
                elementRecord.classList.remove("on");
            }          
        }else{
            boxButtonPlay.classList.add("play");
            elementAudio.play();
            if(elementToneArm){
                elementToneArm.classList.add("playing");
                elementRecord.classList.add("on");
            }
        }
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <button className="text-[24px] text-primary">
                    <IoPlaySkipBackOutline />
                </button>
                <button onClick={handlePlay} className="mx-[32px] text-[24px] text-primary flex box-button-play">
                    <FaPlayCircle className="inner-icon-play"/>
                    <FaPauseCircle className="inner-icon-pause"/>
                </button>
                <button className="text-[24px] text-primary">
                    <IoPlaySkipForwardOutline />
                </button>
            </div>
        </>
    )
}