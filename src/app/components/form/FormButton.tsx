export default function FormButton(props: { text:string }){
    const { text = " " } = props;
    return(
        <>
            <button type="submit" className="h-[50px] w-full bg-third text-primary rounded-[8px] font-[900] text-[16px] hover:bg-black hover:text-[#f5f5f5]">
                {text}
            </button>
        </>
    )
}