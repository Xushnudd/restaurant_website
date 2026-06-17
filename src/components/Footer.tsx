import { useEffect, useState } from "react"
import { getData } from "../utils/utils";


export default function Footer (){
      const [data, setData] = useState<any>(null);
    
        useEffect(() => {
            async function loadData() {
                const req = await getData("/pages_writing/components.json");
                setData(req);
            }
            loadData();
        }, []);
        if (data === null) return "Serverga ulanmadi...";
    return(
        <div>
            
    <section className="bg-[#f3e3e3] py-20 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-16">
        {/* Form */}
        <div>
          <h3 className="text-xl mb-8 text-[#222]">{data.footer.input.title}</h3>

          <div className="space-y-4">
            <input
              placeholder="NAME*"
              className="w-full h-10 bg-white px-4 text-xs outline-none"
            />

            <input
              placeholder="EMAIL*"
              className="w-full h-10 bg-white px-4 text-xs outline-none"
            />

            <input
              placeholder="NUMBER*"
              className="w-full h-10 bg-white px-4 text-xs outline-none"
            />

            <textarea
              placeholder="YOUR MESSAGE*"
              className="w-full h-28 bg-white px-4 py-3 text-xs resize-none outline-none"
            />

            <button className="bg-[#4a4343] text-white px-8 py-4 text-sm">
              {data.footer.input.button}
            </button>
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-xl mb-8 text-[#222]">{data.contact.title}</h3>

          <div className="text-sm text-[#222] space-y-3 leading-7">
            <p>
              2215 US Highway 1 South, North Brunswick, NJ 08902
            </p>

            <div className="mt-6">
              <p>Call Us At:</p>
              <p>P: 732.398.9012</p>
              <p>M: 917.518.4331</p>
              <p>M: 347.894.0269</p>
              <p>Fax: 732.585.3700</p>
            </div>

            <p className="pt-4">
              Email: shareesrestaurant@hotmail.com
            </p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl mb-8 text-[#222]">Quick lines</h3>

          <ul className="space-y-4 text-sm text-[#222]">
            <li>Home</li>
            <li>Menu</li>
            <li>Banquet Facility</li>
            <li>Gallery</li>
            <li>Catering</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xl mb-8 text-[#222]">Hours of opration</h3>

          <div className="space-y-4 text-sm text-[#222]">
            <p>6 DAYS OPEN</p>

            <p>
              Monday, Wednesday-Friday : 11AM To 3PM
            </p>

            <p>
              Monday, Wednesday-Friday : 5PM To 9:30PM
            </p>

            <p>
              Saturday-Sunday : 10AM To 9:30PM
            </p>

            <p>Tuesday : Closed</p>
          </div>
        </div>
      </div>
    </section>
  

        </div>
    )
}