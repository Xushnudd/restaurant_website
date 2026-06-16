import { useEffect, useState } from "react"
import { getData } from "../../utils/utils";
import Header from "../../components/Header";
import Banner from "./Banner";
import Stories from "./Stories";
import Packages from "./Packages";
import Menu from "./Menu";
import ShaneResturend from "./ShaneResturend";

let imgs: any = [];

for (let i = 1; i <= 5; i++) {
    imgs.push(`/pages_img/home_page/img${i}.png`)
}

export default function Home() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function loadData() {
            const req = await getData("/pages_writing/home.json");
            setData(req);
        }
        loadData();
    }, []);
    if (data === null) return "Serverga ulanmadi..."
    return (
        <div className="min-w-300">
            <Header page={1} />
            <Banner datas={data.banner} />
            <Stories datas={data.stories} />
            <Packages datas={data.package} />
            <Menu datas={data.menu} />
            <ShaneResturend datas={data.shane_resturent} />
            <div className="flex">
                {imgs.map((el:string, i:number)=>(
                    <img src={el} alt="img" key={i} className="w-1/5" />
                ))}
            </div>
            <img src="/pages_img/home_page/find.png" alt="fint part" className="w-full" />
        </div>
    )
}