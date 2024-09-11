'use client'

export default function PlayTime() {
    const handleChange = (event: any) => {
        const BoxPlayTimeTotal = event.target;
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        elementAudio.currentTime = parseFloat(BoxPlayTimeTotal.value);// (currentTime)lấy thời gian hiện tại --  (parseFloat)đổi string thành số thực
    }

    return (
        <>
            <div className="mt-[11px] relative box-play-time">
                <div className="h-[4px] w-[80%] bg-primary rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
                <input
                    type="range"
                    min={0}
                    max={0}
                    defaultValue={0}
                    className="w-full h-[4px] bg-third appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                    onChange={handleChange}
                ></input>
            </div>
        </>
    )
}