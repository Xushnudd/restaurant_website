import { useEffect, useState } from "react"
import { getData } from "../../utils/utils";
import Header from "../../components/Header";
import Banner from "./Banner";
import Stories from "./Stories";
import Footer from "../../components/Footer";

export default function Home() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function loadData() {
            const req = await getData("/pages_writing/home.json");
            setData(req);
        }
        loadData();
    }, []);
    if (data === null) return "Serverga ulanmadi...";
    return (
        <div>
            <Header page={1} />
            <Banner datas={data.banner} />
            <Stories datas={data.stories} />
        </div>
    )
}