export default function FormInptu(props: any) {
    const { 
        label = " ",
        type = "text",
        name= " ",
        id= "",
        icon: Icon,
        placeholder=" ",
        required = false
      } = props;
    
    return (
        <>
            <div className="mb-[15px]">
                <label className="flex items-center justify-between font-[700] text-[16px]" htmlFor={id}>
                    <div className="block">
                        <span className="">{label}</span>
                        <span className="text-primary ml-[5px]">*</span>
                    </div>
                    <span className="text-[24px]"> {Icon ? <Icon /> : " "}</span>
                </label>
                <input
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    className="h-[50px] w-full border-b-2 border-primary bg-transparent outline-none placeholder-black font-[900]"
                    required = {required}
                />
            </div>
        </>
    )
}