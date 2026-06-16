interface MenuProps {
    datas: any;
}

export default function Menu({ datas }: MenuProps) {
    return (
        <div className="relative">
            <img src="/pages_img/home_page/menu_back.png" alt="menu" className="w-full" />
            <div className="absolute inset-0 w-full px-50 text-wrap text-white flex flex-col items-center justify-center gap-10">
                <h2 className="text-6xl text-red-500">{datas.title}</h2>
                <p className="text-4xl text-center">{datas.text}</p>
                <button className="bg-black/50 p-5 duration-700 hover:bg-black hover:scale-120">{datas.button}</button>
            </div>
        </div>
    )
}