interface BannerProps {
    datas: any
}

export default function Banner({ datas }: BannerProps) {
    return (
        <div>
            <div className="relative">
                <div className="w-full flex [&>img]:w-1/2">
                    <img src="/pages_img/home_page/banner_left.png" alt="banner" />
                    <img src="/pages_img/home_page/banner_right.png" alt="banner" />
                </div>
                <div className="absolute inset-0 text-white flex justify-between items-center [&>div:hover]:opacity-100">
                    <div className="w-30 h-30 border flex justify-center items-center text-7xl opacity-20">&#8592;</div>
                    <h2 className="text-6xl text-wrap w-[70%] inline-block">{datas.title}</h2>
                    <div className="w-30 h-30 border flex justify-center items-center text-7xl opacity-20">&#8594;</div>
                </div>
            </div>
            <div className="relative">
                <img src="/pages_img/home_page/banner_foot.png" alt="banner" />
                <div className="absolute inset-0 text-white text-3xl w-full flex justify-center items-center gap-15">
                    <span>{datas.foot}</span>
                    <button className="bg-white text-black p-5">{datas.button}</button>
                </div>
            </div>
        </div>
    )
}