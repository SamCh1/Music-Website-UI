import Link from 'next/link';
import SongItem3 from './songitem3';

export default function SongList3( props : {data: any}){
    const { data } = props;
    return(
        <>
            <div className="p-[10px] border rounded-[8px] bg-[url(https://img.freepik.com/free-vector/sun-treble-clef-background-musical-notes_23-2147638413.jpg?t=st=1725816613~exp=1725820213~hmac=5de4b903e94c91b6a18532d2596959cf29baabed7a50aef4b4cd036be8798d5b&w=1060)] bg-cover bg-center">
                {data.map((item:any ,index:number)=>(
                    <div key={index} className="mb-[5px]">
                        <Link href="" className="">
                            <SongItem3
                            top={index + 1}
                            title={item.title}
                            image={item.image}
                            singer={item.singer}
                            listen={item.listen} />
                        </Link>
                    </div>  
                ))}
            </div>
        </>
    )
}