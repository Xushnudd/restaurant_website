import { useState, useEffect } from 'react'

export default function CateringPage() {
    const [data, setData] = useState<any>(null)
    const [activePackage, setActivePackage] = useState(0)
    const [open, setOpen] = useState<Record<number, boolean>>({})

    useEffect(() => {
        fetch("/pages_writing/catering.json")
            .then((res) => res.json())
            .then((info) => setData(info))
    }, [])

    if (data == null) return <div className="text-white">Yuklanmoqda...</div>
    const heights = [ "h-96", "h-120", "h-140", "h-80"]
    
    return (
        <div className="bg-black min-h-screen text-white"><img src="logo.png" alt="" />
            <img src="/pages_img/catering/banner.png" alt="Banner" className="w-full" />
            <p className="text-5xl absolute inset-115 flex items-center justify-center font-bold">{data.banner}</p>
            <div className="p-15">{data.text.map((t: string, i: number) => (<p key={i} className="mb-1">{t}</p>))}</div>
            <div style={{ backgroundImage: "url('/pages_img/catering/you.svg')" }} className="p-10 text-center w-full">
                <p className="font-bold mb-10 text-black">{data.note}</p>
                <div className="grid grid-cols-4 gap-4 items-start font-bold">
                    {data.cards.map((item: any, i: number) => (
                        <div key={i} className={`bg-gray-200 flex flex-col justify-between ${heights[i]}`}>
                            <div>
                                <h2 className="bg-pink-200 font-bold text-black py-4">{item.card.title}</h2>
                                <div className="p-4 text-black text-sm">{item.card.info.map((info: string, j: number) => (<p key={j} className="mb-1">{info}</p>))}</div>
                            </div>
                            <button className="bg-red-600 text-white w-full py-4 font-bold uppercase">{item.button}</button>
                        </div>))}
                </div>
            </div>
            <div className="p-10 bg-white">
                <h2 className="text-center text-3xl font-bold mb-2 text-black">WEEDING PACKAGES</h2>
                <p className="text-center text-gray-500 mb-8">All items to be selected from our Banquet Menu</p>
                <div className="flex bg-black p-6 w-full max-w-6xl mx-auto">
                    <div className="w-1/4 flex flex-col gap-6 border-r border-gray-700 pr-6">
                        {data.weeding_packages.packages.map((pkg: any, i: number) => (
                            <button key={i} onClick={() => setActivePackage(i)} className={`text-left uppercase font-medium ${activePackage === i ? 'text-red-600' : 'text-white'}`}>{pkg.title}</button>))}
                    </div>
                    <div className="w-3/4 grid grid-cols-4 gap-4 pl-8">{data.weeding_packages.packages[activePackage].services?.map((svc: any, i: number) => (
                            <div key={i}>
                                <h4 className="font-bold mb-6 text-white uppercase">{svc.title}</h4>
                                <ul className=" text-gray-300 space-y-3 mb-8">{svc.list.map((item: string, j: number) => <li key={j}>{item}</li>)}</ul>
                            </div>))}
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: "url('/pages_img/catering/you.svg')", backgroundSize: 'cover' }} className="p-10">
                <h2 className="text-center text-3xl font-bold mb-10 text-red-500">{data.trays.title}</h2>
                <button className="bg-red-600 py-2 px-4 ml-122 mb-18 w-60"></button>
                <div className="overflow-x-auto bg-black/80 p-6">
                    <table className="w-full border-collapse text-sm text-white">
                        <thead><tr className="border-b border-gray-600">{data.trays.info[0].title.map((th: string, i: number) => <th key={i} className="p-4 text-left">{th}</th>)}</tr></thead>
                        <tbody>{data.trays.info[0].packages.map((row: any, i: number) => (
                            <tr key={i} className="border-b border-gray-800 hover:bg-gray-900">
                                <td className="p-4">{row.tray_size}</td><td className="p-4">{row.veg}</td><td className="p-4">{row.non_veg}</td><td className="p-4">{row.seafood}</td><td className="p-4">{row.bread}</td><td className="p-4">{row.rice}</td>
                            </tr>))}</tbody>
                    </table>
                </div>
            </div>
            {/* Siz so'ragan Accordion qismi */}
           <div className="p-10 bg-white">
                {data.appertizers.menu_sections.map((item: string, i: number) => (
                    <div 
                        key={i} 
                        className={`mb-2 bg-pink-200 text-black transition-all duration-300 ${open[i] ? 'h-40' : 'h-16'}`}
                    >
                        <div 
                            className="flex justify-between p-4 cursor-pointer font-bold" 
                            onClick={() => setOpen({...open, [i]: !open[i]})}
                        >
                            <span>{item}</span>
                            <span>{open[i] ? '-' : '+'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}