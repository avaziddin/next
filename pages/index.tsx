import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/layaut/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Layout>
        <div>


          <div className="w-full bg-blue-950 px-20 pt-5 pb-32 flex flex-col gap-32">

            <div className="w-full flex flex-col justify-center items-center">
              <Image src="/title.svg" alt="title" width={1000} height={1000}/>
              <span className="text-[20px] text-white" >From custom software development to cybersecurity, our team of experts is dedicated <br />
               to delivering solutions that are tailored to your unique needs.</span> <br /> <br /> <br /> <br />
               <button  className="w-[320px] h-[50px] text-white px-10 border rounded-[10px]">EXPLORE NOW</button>
            </div>


            <div className="flex flex-col gap-24">
              <div>
                <h1 className="text-[100px] text-white font-bold">WHY <br />Choose Us?</h1>
              </div>


              <div className="flex w-full justify-between items-center text-gray-300">

                <div className="flex flex-col ">
                  <Image src="/first.svg" alt="first" width={100} height={100}/> <br /> <br />
                  <h1 className="text-[32px] text-white">expertise</h1> <br />
                  <span >Our team of experienced experts <br /> have the knowledge and expertise <br />
                to deliver innovative  IT solutions <br />
                that meet your unique needs.</span>
                </div>
                <div className="flex flex-col ">
                  <Image src="/second.svg" alt="first" width={80} height={100}/> <br /> <br />
                  <h1 className="text-[32px] text-white">technology</h1> <br />
                  <span>We stay up to date with the latest <br /> trends and technologies in the IT <br />
                  industry, so you can get the most  <br />
                  advanced solutions available.</span>
                </div>
                <div className="flex flex-col ">
                  <Image src="/third.svg" alt="first" width={100} height={100}/> <br /> <br />
                  <h1 className="text-[32px] text-white">solutions</h1> <br />
                  <span>We take a personalized approach <br />to every project, working closely  <br />
                  with you to understand your<br />
                  business and create solutions.</span>
                </div>
                <div className="flex flex-col">
                  <Image src="/fourth.svg" alt="first" width={100} height={100}/> <br /> <br />
                  <h1 className="text-[32px] text-white">results</h1> <br />
                  <span>Our track record speaks for itself –<br /> have the knowledge and expertise <br />
                  sizes and industries achieve their<br />
                  goals with our IT solutions.</span>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full px-20 pt-[200px]  h-[900px] flex flex-col gap-20 bg-[url(/bg.svg)] bg-center bg-cover ">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex gap-10 items-start">
              <Image src="yag.svg" alt="yag" width={800} height={300}/>
              <Image src="du.svg" alt="yag" width={500} height={200}/>
              </div> <br /> <br /><br />
              <Image src="se.svg" alt="yag" width={900} height={300}/>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
          <span className="text-[20px] text-center">That's why we're committed to delivering innovative IT solutions to businesses of all <br /> sizes. Our team of experienced professionals is dedicated to helping you achieve <br /> your goals and thrive in a rapidly evolving digital landscape.</span>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
          <Image src="Numbers.svg" alt="numbers" width={1300} height={200}/>
          </div>

          </div>


          <div className="w-full  px-20 pt-[100px]  bg-blue-950 flex flex-col gap-32 pb-[200px] ">
            <div className="flex justify-between items-center"><h1 className="text-white text-[100px] font-bold">Client Stories</h1> <Image src="/strelka.svg" alt="logo" width={50} height={100}/> </div>

            <div className="flex justify-between">

              <div>
                <h1 className="text-[50px] text-blue-400 font-bold">Amazing!</h1> <br />
                <span className="text-white">“WaveNet's cybersecurity solution gave us the peace of mind we <br /> needed to focus on our business. They took the time to understand <br /> our unique needs and created a solution that protected our sensitive <br /> data and ensured compliance with industry regulations.”</span>
                <br /> <br /><br />
                <div className="flex items-center justify-end gap-10">
                  <div><h1 className="text-white font-bold">Tom Johnson</h1> <span className="text-gray-300">CIO of Mika Medika Healthcare</span></div>
                  <Image src="/pisar.svg" alt="pisar" width={70} height={70}/>
                </div>
              </div>

              <div className="w-[1px] h-[380px] bg-white "></div> 

              <div>
                <h1 className="text-[50px] text-blue-400 font-bold">Best Service</h1> <br />
                <span className="text-white">“We were struggling to keep up with the demands of our growing <br />business until we partnered with WaveNet. Their custom software <br /> development solution has helped us streamline our operations and <br /> improve efficiency, saving us time and money.”</span>
                <br /> <br /><br />
                <div className="flex items-center justify-end gap-10">
                  <div><h1 className="text-white font-bold">Jane Doe</h1> <span className="text-gray-300">COO of DEF Manufacturing</span></div>
                  <Image src="/duxtar.svg" alt="pisar" width={70} height={70}/>
                </div>
              </div>


            </div>

            <Image src="/brands.svg" alt="brands" width={1600} height={200}/>
          </div>


          <div className="w-full bg-gray-300 px-20 py-[200px] flex flex-col gap-10">
            <div className="flex justify-center items-center"><h1 className="text-[80px] font-bold">Services</h1></div> <br />
            <div className="flex justify-between items-center"><h1 className="text-[56px]">Web Development</h1> <Image src="/chorniy.svg" alt="strelka" width={60} height={10}/></div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="flex justify-between items-center"><h1 className="text-[56px]">Mobile Development</h1> <Image src="/chorniy.svg" alt="strelka" width={60} height={10}/></div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-10"><h1 className="text-[56px] font-bold">Cyber Security</h1> <span>Our cyber security service provides advanced protection for your data and <br /> systems against potential threats and attacks, ensuring your business<br />
               operates securely and efficiently.</span> <Image src="/chorniy.svg" alt="strelka" width={60} height={20}/> </div>
               <Image src="/odam.svg" alt="odam" width={800} height={200}/>
            </div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="flex justify-between items-center"><h1 className="text-[56px]">Digital Marketing</h1> <Image src="/chorniy.svg" alt="strelka" width={60} height={10}/></div>
            <div className="w-full h-[1px] bg-black"></div>
          </div>


        </div>
      </Layout>
    </div>
  );
}
