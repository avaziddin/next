import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/layaut/Layout";


export default function Second () {
    return (
        <>
        <Layout>
            <div>
                <div className="flex py-[150px] px-20 bg-blue-950">
                    <div>
                        <h1 className="text-white text-[100px]">Projects</h1>
                    </div>
                </div>
            </div>
        </Layout>

        </>
    )
}