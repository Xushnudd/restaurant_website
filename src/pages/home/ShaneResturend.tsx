interface ShaneResturendProps {
    datas: any;
}

export default function ShaneResturend({ datas }: ShaneResturendProps) {
    return (
        <div className="relative">
            <img src="/pages_img/home_page/shane_resturent.png" alt="shane resturend photo" />
            <button className="absolute top-[10%] left-[3%] p-5 text-black text-4xl uppercase font-bold bg-yellow-600 duration-500 hover:bg-yellow-500 hover:scale-110">{datas.button}</button>
        </div>
    )
}