import Link from "next/link";

export default function Title(props: { text: String }) {
    const { text = " " } = props;
    return (
        <>
            <div className="text-left mt-[10px] mb-[10px]">
                <h1 className="text-[32px] font-[700] capitalize">{text}</h1>
            </div>
        </>
    )
}