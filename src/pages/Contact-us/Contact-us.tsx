import { useState, useEffect } from "react";
import { getData } from "../../utils/utils";
import Location from "../../components/Location";

export default function Contact() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function loadData() {
            const req = await getData("/pages_writing/contact.json");
            setData(req);
        }
        loadData();
    }, []);
    if (data === null) return "Serverga ulanmadi...";
    return (
        <>
            <div className="relative">
                <img src="/pages_img/contact_us/banner.png" alt="banner" />
                <div className="absolute inset-0 text-white text-5xl w-full flex justify-center items-center">
                    <span>{data.banner}</span>
                </div>
            </div>
            <div className="bg-black text-white py-10">
                <h3 className="text-gray-300 text-center text-xl">{data.contact.title}</h3>
                <div className="w-full flex justify-center gap-10 p-10">
                    <div className="flex flex-col gap-10">
                        {data.contact.contact_info.map((el: any, i: number) => (
                            <div key={i} className="capitalize">
                                <span>{el.title}</span>
                                <div className="flex flex-col">
                                    {el.text.map((elm: any) => (
                                        <span>{elm}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            {data.contact.contact_form.fields.map((el: any, i: number) => (
                                <input key={i} type={el.type} placeholder={el.label} className={`border-2 w-100 text-2xl rounded-none ${el.type != "textarea" ? "h-17" : "h-40"}`} />
                            ))}
                        </div>
                        <button className="w-max bg-white text-black px-10 py-5 font-bold duration-500 hover:scale-95 active:bg-neutral-600">{data.contact.contact_form.action_button}</button>
                    </div>
                </div>
                <Location />
            </div>
        </>
    )
}