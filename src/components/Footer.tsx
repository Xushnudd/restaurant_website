import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getData } from "../utils/utils";

export default function Footer() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function loadData() {
            const req = await getData("/pages_writing/components.json");
            setData(req);
        }
        loadData();
    }, []);
    if (data === null) return "Serverga ulanmadi...";
    return (
        <footer className="bg-red-100 p-15 flex justify-between gap-10">
            <div className="w-1/4 flex flex-col gap-10">
                <h3 className="text-xl font-bold">{data.footer.input.title}</h3>
                <div className="w-full flex flex-col gap-5">
                    {data.footer.input.message.map((el: any, i: number) => (
                        <input key={i} type={el.data_type} placeholder={el.placeholder} className="w-full bg-white outline-none" />
                    ))}
                </div>
            </div>
            {data.footer.information.map((el: any, i: number) => (
                <div key={i} className="w-1/4 flex flex-col gap-10">
                    <h3 className="text-xl font-bold">{el.title}</h3>
                    <div className="w-full flex flex-col gap-3">
                        {el.text.map((txt: any, j: number) => (
                            i==1 ? <Link to={txt.link} key={j} className="font-bold cursor-pointer hover:text-gray-600">{txt.name}</Link> : <span key={j}>{txt}</span>
                        ))}
                    </div>
                </div>
            ))}
        </footer>
   )
}