import { useEffect, useState } from "react";
import { getData } from "../../utils/utils";



export default function MenuPage( ){
    const [data, setData] = useState<any>(null)

    useEffect(()=>{
        async function loadData () {
            const req = await getData("/pages_writing/menu.json")
            setData(req)
        }
        loadData()
    },[])
    if (data === null) return "Serverga ulanmadi..."
    return(
        
       
        <div>
                
             <div className="relative">
                
                <img src="/pages_img/menu_page/banner.png" alt="" />
                <div className="absolute inset-0 flex justify-center w-full h-full items-center text-white text-5xl">{data.banner}</div>
            </div>
            <div className="bg-black p-4 px-88 pt-10">
            <div className="bg-red-500 flex justify-center p-5 text-white">
                    {data.button}
            </div>
            </div>
            <div className="px-10 bg-black">
                <img src="/pages_img/menu_page/1.png" alt="" />
            </div>
            <div className="bg-black p-4 px-88 ">
            <div className="bg-red-500 flex justify-center p-5 text-white">
                    {data.button}
            </div>
            </div>
            <div className="px-10 bg-black">
                <img src="/pages_img/menu_page/2.png" alt="" />
            </div>
            <div className="bg-black p-4 px-88 ">
            <div className="bg-red-500 flex justify-center p-5 text-white">
                    {data.button}
            </div>
            </div>
            <div className="px-10 bg-black">
                <img src="/pages_img/menu_page/3.png" alt="" />
            </div>
            <div className="relative">
            <div className="pt-20 bg-black">
                <img src="/pages_img/menu_page/4.png" alt="" />
            </div>
                <div className="gap-5">
                <div className="absolute inset-0 flex justify-center w-full h-90 text-5xl items-center text-white gap-5 ">
                    {data.notice.title}
                </div>
                <div className="absolute inset-0 flex justify-center w-full h-full items-center text-2xl text-white text-center flex-col gap-5 pt-10">
                    {data.notice.caption.map((el:string,i:number) =>(
                        <p key={i}>{el}</p>
                    ))}
                </div>
                </div>
            </div> 
        </div>
    )
}