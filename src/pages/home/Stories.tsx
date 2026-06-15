interface StoriesProps {
    datas: any;
}

export default function Stories({ datas }: StoriesProps) {
    const imgs = [
        "/pages_img/home_page/stories_logo.png",
        "/pages_img/home_page/stories_logo2.png",
        "/pages_img/home_page/stories_logo3.png"
    ]
    return (
        <div className="relative">
            <img src="/pages_img/home_page/stories_back.png" alt="background" className="w-full" />
            <div className="absolute inset-0 p-10 flex flex-col gap-10">
                <div className="flex gap-10">
                    <img src="/pages_img/home_page/storie.png" alt="storie picture" className="w-[50%]" />
                    <div>
                        <div className="flex flex-col gap-10">
                            <h2 className="text-6xl text-red-600 font-bold uppercase">{datas.title}</h2>
                            <p className="text-5xl">{datas.text}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-evenly">
                    {imgs.map((el: string, i: number) => (
                        <img src={el} alt="Storie logo" key={i} className="w-50 h-50" />
                    ))}
                </div>
            </div>
        </div>
    )
}