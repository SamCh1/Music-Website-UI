"use client"
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { ReactNode } from "react"
import { MdOutlineFavorite } from "react-icons/md";
import { PiVinylRecordFill, PiMusicNotesMinusFill } from "react-icons/pi";
import { IoPersonAddSharp, IoPersonSharp, IoHomeSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";



export default function SiderMenu(){
    interface MenuLink{
        title: String,
        icon: ReactNode,
        link: Url
    }

    const menu : MenuLink[] = [
        {
            icon: <IoHomeSharp/>,
            title: "Trang Chủ",
            link: "/"
        },
        {
            icon: <PiMusicNotesMinusFill/>,
            title: "Danh Mục Bài Hát",
            link: "/categories"
        },
        {
            icon: <PiVinylRecordFill/>,
            title: "Ca Sĩ",
            link: "/singers"
        },
        {
            icon: <MdOutlineFavorite/>,
            title: "Bài Hát Yêu Thích",
            link: "/wishlist"
        },
        {
            icon: <IoPersonSharp/>,
            title: "Đăng Nhập",
            link: "/login"
        },
        {
            icon: <IoPersonAddSharp/>,
            title: "Dăng Ký",
            link: "/register"
        }
    ] 

    const pathName = usePathname();
    return(
        <>
            <nav className="py-[55px]">
                <ul className="">
                    {menu.map((item, index) => (
                        <li key={index} className="mb-[30px] text-[#a0a0a0]">
                            <Link 
                                href={item.link} 
                                className={" flex items-center hover:text-[#000] text-[18px] " + (item.link === pathName ? "text-[#000]" : "text-[#a0a0a0]")}>
                                
                                <span className="mr-[20px]" >
                                    {item.icon}
                                </span>
                                <span className="">
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </>
    )
}