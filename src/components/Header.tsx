import { useEffect, useState } from "react"
import { getData } from "../utils/utils";

interface HeaderProps {
    page: number;
}

export default function Header({ page }: HeaderProps) {
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
        <header className="w-full p-10 bg-black text-white text-lg flex justify-between items-center">
            <img src="/pages_img/public/logo.png" alt="logo" className="w-[30%] cursor-pointer duration-750 hover:scale-95" />
            <div className="w-max flex gap-10">
                <nav className="w-max flex gap-3 items-center">
                    {data.header.links.map((el: string, i: number) => (
                        <span key={i} className={`${i == page - 1 ? "text-amber-600": "text-white"} cursor-pointer hover:text-amber-500`}>{el}</span>
                    ))}
                </nav>
                <button className="px-8 py-4 bg-red-500 cursor-pointer hover:bg-red-600">{data.header.button}</button>
            </div>
        </header>
    )
}