'use client'
import { FaRegCirclePlay } from "react-icons/fa6";

export default function ButtonPlay(props: any){
    const handlePlay = () => {
        const elementPlayAudio:any = document.querySelector(".play-audio");
        const elementToneArm:any = document.querySelector(".tone-arm");
        const elementRecord:any = document.querySelector(".record");
        // Phát nhạc
        
        const elementAudio:any = elementPlayAudio?.querySelector(".inner-audio");
        const elementSource:any = elementPlayAudio?.querySelector(".inner-source");
        elementSource.src = props.audio;
        elementAudio.load();
        elementAudio.play();

        // hiển thị khối play
        if(elementPlayAudio.classList.contains("hidden")){
            elementPlayAudio.classList.remove("hidden");
        }

        if(elementToneArm){
            elementToneArm.classList.add("playing");
            elementRecord.classList.add("on");
        }

        // hiển thị hình ảnh
        const elementImage:any = document.querySelector(".inner-image");
        const elementImage1:any = document.querySelector(".inner-image1");
        const elementLabel:any = document.querySelector(".inner-label");
        elementImage.src = props.image;
        elementImage.alt = props.title;
        if(elementLabel){
            elementImage1.src = props.image;
            elementImage1.alt = props.title;
            elementLabel.style.backgroundImage = `url(${props.image})`;
        }

        // hiển thị tiêu đề
        const elementTitle:any = document.querySelector(".inner-title");
        const elementTitle1:any = document.querySelector(".inner-title1");

        elementTitle.innerHTML = props.title;

        if(elementTitle1){
            elementTitle1.innerHTML = props.title;
            const elementSinger1:any = document.querySelector(".inner-singer1");
            elementSinger1.innerHTML = props.singer;
            const elementLyric:any = document.querySelector(".inner-lyric1");
             //hiển thị lyric
            elementLyric.innerHTML = props.lyric;
        }
        

        //hiển thị tên ca sĩ
        const elementSinger:any = document.querySelector(".inner-singer");
        

        elementSinger.innerHTML = props.singer;
        

       
        
        

        //class play cho box button play
        const boxButtonPlay = document.querySelector(".box-button-play");
        boxButtonPlay?.classList.add("play");

        //Lấy tổng thời gian
        const BoxPlayTime: any = document.querySelector(".box-play-time");
        const BoxPlayTimeTotal = BoxPlayTime?.querySelector(".inner-total");
        const BoxPlayTimeCurrent = BoxPlayTime?.querySelector(".inner-current");

        elementAudio.onloadedmetadata = () => {
            const totalTime = elementAudio.duration; // Lấy ra tổng giây Audio 
            BoxPlayTimeTotal.max= totalTime;

            //Lấy thời gian hiện tại
            elementAudio.ontimeupdate = () => {
                const currentTime = elementAudio.currentTime; // Lấy số giây hiện tại

                const percent = currentTime * 100 / totalTime;
                BoxPlayTimeCurrent.style.width = `${percent}%`; //Lấy (thời gian hiện tại * 100 / tổng thời gian) => độ dài(width) thanh ngang

                BoxPlayTimeTotal.value = currentTime;
            }

        }; //Hàm js lấy độ dài của file

        
    }
    return(
        <>
            <button 
                onClick={handlePlay} 
                className={props.className}
            >
                    <FaRegCirclePlay/>
            </button>
        </>
    )
}