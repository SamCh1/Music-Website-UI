import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBackOutline, IoPlaySkipForwardOutline } from "react-icons/io5";
import { FaVolumeHigh } from "react-icons/fa6";


export default function PlaySong() {
    return (
        <>
            <div className="bg-[#dbdbdb] w-full bottom-0 left-0 py-[20px] px-[20px] fixed z-[999] border-t">
                <div className="container mx-auto flex items-center justify-between">
                    {/* info */}
                    <div className="flex items-center w-[218px]">
                        <div className="border border-[#000] w-[49px] aspect-square rounded-[50%] truncate">
                            <img
                                src="/demo/images.jpeg"
                                alt="Radio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="ml-[12px]">
                            <div className="font-[700] text-primary mb-[2px] text-[16px]">
                                Radio
                            </div>
                            <div className="font-[700] text-[14px] text-third">
                                Lana Del Rey
                            </div>
                        </div>
                    </div>
                    {/* button radio */}
                    <div className="flex-1 mx-[66px]">
                        <div className="flex items-center justify-center">
                            <button className="text-[24px] text-primary">
                                <IoPlaySkipBackOutline />
                            </button>
                            <button className="mx-[32px] text-[24px] text-primary">
                                <FaPlayCircle />
                            </button>
                            <button className="text-[24px] text-primary">
                                <IoPlaySkipForwardOutline />
                            </button>
                        </div>
                        <div className="mt-[11px] relative">
                            <div className="h-[4px] w-[80%] bg-primary rounded-[50px] absolute left-0 top-[14px]"></div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                defaultValue={80}
                                className="w-full h-[4px] bg-third appearance-none rounded-[50px] cursor-pointer range-sm"
                            ></input>
                        </div>
                    </div>
                    {/* volumn */}
                    <div className="w-[184px] flex items-end">
                        <button className="text-[18px] text-primary">
                            <FaVolumeHigh />
                        </button>
                        <div className="ml-[6px] relative">
                            <div className="h-[4px] w-[80px] bg-[#000] rounded-[50px] absolute left-0 top-[14px]"></div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                defaultValue={80}
                                className="w-full h-[4px] bg-third appearance-none rounded-[50px] cursor-pointer range-sm"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
