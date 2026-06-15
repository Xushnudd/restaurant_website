interface StoriesProps {
    datas: any;
}

export default function Stories({ datas }: StoriesProps) {
    return (
        <div className="p-10">
            <img src="/pages_img/home_page/storie.png" alt="storie picture" className="w-150" />
            <div>
                <h2>{datas.title}</h2>
            </div>
        </div>
    )
}