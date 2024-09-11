'use client'
import { FaVolumeHigh } from "react-icons/fa6";
export default function PlayVolume() {
    const handleChange = (event: any) => {
        const BoxVolumeTotal = event.target;
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementAudio= elementPlayAudio.querySelector(".inner-audio");
        elementAudio.volume = parseFloat(BoxVolumeTotal.value)/100; // vì giá trị volume tính từ 0.1 nên lấy giá trị số nguyên chia cho 100
    
        const boxVolumeCurrent: any = document.querySelector(".box-volume .inner-current-volume");
        boxVolumeCurrent.style.width = `${BoxVolumeTotal.value}%`;
    }

    return (
        <>
            <div className="w-[184px] flex items-end box-volume">
                <button className="text-[18px] text-primary inner-button-volume">
                    <FaVolumeHigh />
                </button>
                <div className="ml-[6px] relative">
                    <div className="h-[4px] w-[100%] bg-[#000] rounded-[50px] absolute left-0 top-[14px] inner-current-volume"></div>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={100}
                        className="w-full h-[4px] bg-third appearance-none rounded-[50px] cursor-pointer range-sm inner-total-volume"
                        onChange={handleChange}
                    ></input>
                </div>
            </div>
        </>
    )
}