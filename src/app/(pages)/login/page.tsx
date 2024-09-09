import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import FormButton from "@/app/components/form/FormButton";

export default function LoginPage(){
    return (
      <>
          <div className="w-[100%] flex items-center justify-center bg-[url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat rounded-[18px] pb-[150px] pt-[50px]">
            <div className="mt-[60px] w-[500px] mx-auto backdrop-blur-[10px] rounded-[18px] border-white border-2 py-[20px]">
                <Title 
                  text="Đăng Nhập"
                  className="text-center"/>
                <form className="px-[20px] py-[10px]">
                  {/* Email */}
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ví dụ: levana@gmai.com"
                    icon = {MdEmail}
                    required = {true}
                  />
                  {/* mật khẩu */}
                  <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    icon = {FaLock}
                    required = {true}
                  />
                  <div className="flex items-center justify-between font-[500] text-third mb-[15px] mt-[30px]">
                    <Link href='/' className="hover:text-primary">Quên Mật Khẩu</Link>
                    <Link href="/register" className="hover:text-primary"> Đăng ký </Link>
                  </div>
                  <FormButton text="Đăng Nhập"/>
                </form>
            </div>
          </div>
      </>
      );
}