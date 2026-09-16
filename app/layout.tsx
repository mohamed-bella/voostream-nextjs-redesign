import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap"});
const description="VooStream IPTV subscription for live TV, sports, movies and series. Compare plans, supported devices and setup guides.";
export const metadata:Metadata={metadataBase:new URL("https://voostream.com"),title:{default:"VooStream IPTV – Live TV, Sports, Movies & Series",template:"%s | VooStream"},description,keywords:["VooStream","VooStream IPTV","IPTV subscription","IPTV pricing","live TV IPTV","sports IPTV","Smart TV IPTV","Firestick IPTV","Android TV IPTV","IPTV channels"],applicationName:"VooStream",authors:[{name:"VooStream"}],creator:"VooStream",publisher:"VooStream",category:"entertainment",alternates:{canonical:"/"},icons:{icon:"/icon.svg",shortcut:"/icon.svg"},openGraph:{type:"website",locale:"en_US",url:"/",siteName:"VooStream",title:"VooStream IPTV – Choose Your Subscription",description},twitter:{card:"summary",title:"VooStream IPTV",description},robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#0d1d1f"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={manrope.variable}><body>{children}</body></html>}
