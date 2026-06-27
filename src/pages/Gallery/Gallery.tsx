import { useEffect, useState } from "react"
import { getData } from "../../utils/utils";
import Priya from "../../components/Priya";

export default function Gallery (){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function loadData() {
            const req = await getData("/pages_writing/gallery.json");
            setData(req);
        }
        loadData();
    }, []);
    if (data === null) return "Serverga ulanmadi...";
    return(
        <div>
            
            <div className="relative">
                <div>
                    <img src="/pages_img/gallery/banner.png" alt="" />
                </div>
                <div className="absolute inset-0 flex justify-center w-full h-full items-center text-white text-5xl ">
                    {data.banner}
                </div>
            </div>
            <div className="bg-black p-25">
                <img src="/pages_img/gallery/image.png" alt="" />
            </div>
            <Priya />
        </div>
    )
}