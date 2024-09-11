"use client"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch, FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";


export default function Search() {
  const router = useRouter(); //để chuyển hướng trang
  {/* để lưu giá trị trên thanh seach khi load lại trang */}
  const searchParams = useSearchParams();
  const keywordDefault = searchParams.get("keyword") || " ";
  {/* End */}
  const handleSearch = (event: any) => {
    event.preventDefault();
    const keyword = event.target.keyword.value;
    if(keyword){
      router.push(`/search?keyword=${keyword}`)
    }
  }

  return (
    <>
      <div className="flex items-center jusitfy-between px-[10px]">
        <form onSubmit={handleSearch} className="w-[530px] border border-[#000] rounded-[50px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center">
              <input 
                  type="text"  
                  name="keyword"
                  placeholder="Nhập từ khoá tìm kiếm..."
                  defaultValue={keywordDefault}
                  className="order-2 text-[16px] font-[600] text-primary bg-transparent outline-none flex-1">
              </input>
              <button 
                  type="submit" 
                  className="order-1 text-[22px] text-primary mr-[20px]">
                  <FaSearch/>
              </button>
          </form>
        <div className="ml-[300px]">
          <ul className="flex items-center">
            <Link href="" className="text-[22px] text-third hover:text-primary"> <li className="ml-[30px]"> <FaBell/> </li></Link>
            <Link href="" className="text-[22px] text-third  hover:text-primary"> <li className="ml-[30px]"> <IoSettings/> </li></Link>
          </ul>
        </div>
      </div>

    </>
  );
}
