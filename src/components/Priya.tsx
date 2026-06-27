import { useEffect, useState } from "react"
import { getData } from "../utils/utils";
export default function Priya(){
        const [data, setData] = useState<any>(null);
    
        useEffect(() => {
            async function loadData() {
                const req = await getData("/pages_writing/components.json");
                setData(req);
            }
            loadData();
        }, []);
        if (data === null) return "Serverga ulanmadi...";
    return(
        <div className="relative py-10 bg-black">
            <div>
                <img src="/pages_img/menu_page/5.png" alt="" />
            </div>
            <div className="flex flex-col  absolute inset-0  justify-center w-full h-90 text-2xl items-center  gap-5  text-black  p-8  text-center">
                <div className="text-2xl    ">
                    {data.info.text}
                </div>
                <div className="text-6xl ">
                    {data.info.name}
                </div>
            </div>
        </div>
    )
}