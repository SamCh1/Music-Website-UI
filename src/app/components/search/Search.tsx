import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <>
        <form className="border-none border-[#000] rounded-[50px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center">
            <input 
                type="text"  
                name="keyword"
                placeholder="Nhập từ khoá tìm kiếm..."
                className="order-2 text-[16px] font-[600] text-primary bg-transparent outline-none flex-1">
            </input>
            <button 
                type="submit" 
                className="order-1 text-[22px] text-primary font-[700] mr-[20px]">
                <FaSearch/>
            </button>
        </form>
    </>
  );
}
