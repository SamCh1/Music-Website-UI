export default function BannerHome() {
    return (
        <>
            <div className="w-[534px] flex items-center justify-center">
                <div className="player bg-[#f5f5f5] w-full h-[330px] rounded-[18px] relative">
                    <div className="record bg-[url(https://img.freepik.com/free-vector/colorful-ring-gradient-element_53876-118490.jpg?t=st=1725709104~exp=1725712704~hmac=defccdf04cd3185440380aac3b6984862f43a5246bd87afec9b723a7e2f7a163&w=1060)]">
                        <div className="label bg-[url(/demo/images.jpeg)]"></div>
                    </div>
                    <div className="tone-arm">
                        <div className="control"></div>
                    </div>
                    <button className="btn"></button>
                </div>
            </div>
        </>
    )
}