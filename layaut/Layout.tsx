import Link from "next/link";
import Image from "next/image";
import React from "react";


interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
        <header className="flex bg-blue-950 pt-20 pl-20 pr-20 pb-10 justify-between items-center fixed w-full">
        <div>
        <Image src="/logo.svg" alt="logo" width={200} height={200}/>
        </div>
        <div className="flex gap-7 text-white">
            <Link href={"/about"}>ABOUT US</Link>
            <Link href={"/services"}>SERVICES</Link>
            <Link href={"/pricing"}>PRICING</Link>
            <Link href={"/block"}>BLOG</Link>
            <Link href={"/contact"}>CONTACT</Link>
        </div>
        <div>
        <button className="w-[120px] h-[55px] rounded-[10px] text-white border">SIGN IN</button>
        </div>
        </header>
        {children}
        <footer className="w-full bg-blue-950 px-20 py-5">
            <div className="flex justify-between">

                <div className="flex flex-col justify-between">
                <Image src="/logo.svg" alt="logo" width={200} height={200}/>
                <div className="flex gap-8">
        <Image src="/instagram.svg" alt="logo" width={23} height={22}/>
        <Image src="/facebook (2).svg" alt="logo" width={23} height={22}/>
        <Image src="/twitt.svg" alt="logo" width={23} height={22}/>
                </div>
                 </div>

                <div className="flex gap-20">
                    <div className="flex flex-col gap-3 text-gray-400"><h1 className="text-white text-[32px]">Explore</h1><span>About Us</span><span>Services</span><span>Pricing</span><span>Blog</span><span>Contact</span></div>
                    <div className="flex flex-col gap-3 text-gray-400"><h1  className="text-white text-[32px]">Contact</h1><span>Email</span><span>Phone</span><span>Address</span><span>Social Media</span></div>
                    <div className="flex flex-col gap-3 text-gray-400"><h1  className="text-white text-[32px]">Newsletter</h1><span>Subscribe to our newsletter to stay informed about <br /> our latest products, services, and promotions. <br />
                     Feel free to unsubscribe anytime!</span>
                     <input type="text" className="h-[60px] bg-blue-950 border pl-7" placeholder="Enter Your Email Address ..." />
                     
                     </div>
                </div>
            </div> <br /> <br />


            <hr/>
            
            <div className="w-full flex justify-between text-gray-400 pt-4">
                <span>Copyright © 2023 for WaveNet. All rights reserved.</span>
                <span>Terms & Condition  |  Privacy Policy</span>
            </div>
        </footer>
        </>
    );
};

export default Layout