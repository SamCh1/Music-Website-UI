import Link from "next/link";

export default function Title(props: { text: String, className?: string }) {
    const { text = " ", className = ""} = props;
    return (
        <>
            <div className={"text-left mt-[10px] mb-[10px] " + className}>
                <h1 className="text-[32px] font-[700] capitalize">{text}</h1>
            </div>
        </>
    )
}