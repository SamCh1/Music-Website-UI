import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
  return (
    <>
        <div className="font-[700] text-[16px h-[100vh] fixed w-[280px] px-[20px]">
            <div className="">
                <Link href="/">
                    <div className="flex items-center">
                        <div className="font-[900] text-[36px]">
                            <h1 className="underline">MUSIC </h1>
                        </div>
                        <div className="">
                            <img src="/logo.svg" alt="Logo" className="h-[42px] w-auto"></img>
                        </div>  
                    </div>
                </Link>
            </div>
            <SiderMenu></SiderMenu>
        </div>
    </>
  );
}
