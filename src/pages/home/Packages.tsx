interface PackagesProps {
    datas: any;
}

export default function Packages({ datas }: PackagesProps) {
    const imgs = {
        "background": [
            "/pages_img/home_page/package_back_left.png",
            "/pages_img/home_page/package_back_center.png",
            "/pages_img/home_page/package_back_right.png"
        ],
        "icons": [
            "/pages_img/home_page/package.png",
            "/pages_img/home_page/package2.png",
            "/pages_img/home_page/package3.png"
        ]
    }
    return (
        <div className="relative">
            <div className="w-full flex">
                {imgs.background.map((el: string, i: number) => (
                    <img src={el} alt="package picture" key={i} className="w-1/3" />
                ))}
            </div>
            <div className="absolute inset-0 text-white flex flex-col justify-center items-center gap-35">
                <h3 className="text-5xl">{datas.title}</h3>
                <div className="flex justify-around">
                    {imgs.icons.map((el: string, i:number)=>(
                        <img src={el} alt="icon" key={i} className="w-1/4 duration-700 hover:scale-120" />
                    ))}
                </div>
                <button className="bg-white/50 text-gray-900 text-xl font-bold p-5 hover:bg-white duration-700 hover:scale-120">{datas.button}</button>
            </div>
        </div>
    )
}