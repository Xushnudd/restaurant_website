import { useState, useEffect } from "react";
import Button from "./Button";
export default function BanquetPage() {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        fetch("/pages_writing/banquet_facelity.json")
            .then((res) => res.json())
            .then((info) => setData(info));}, []);
    if (data == null) return <div className="text-white">Yuklanmoqda...</div>;
    return (
        <div className="bg-black">
            <div className="relative">
                <img src="/pages_img/banquet_facelity/image.png" className="w-full"/>
                <p className="text-5xl text-white absolute inset-0 flex items-center justify-center font-bold">{data.banner}</p>
            </div>
            <div className="text-center text-white py-10">
                <h2 className="text-red-500 text-xl font-bold">{data.banner_foot[0]}</h2>
                <p>{data.banner_foot[1]}</p>
                <p>{data.banner_foot[2]}</p>
            </div>
            <Button />
            <div className="grid grid-cols-4 gap-4 p-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                    <img key={i} src={`/pages_img/banquet_facelity/${i}.png`} className="w-full"/>
                ))}
            </div>
            <div className="gap-10 flex justify-center">
            <button className="bg-red-500 w-15 h-10">1</button>
            <button className="bg-red-500 w-15 h-10">2</button>
            <button className="bg-red-500 w-15 h-10">3</button>
            </div>
        </div>)}