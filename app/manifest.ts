import type { MetadataRoute } from "next";
export const dynamic="force-static";
export default function manifest():MetadataRoute.Manifest{return{name:"VooStream IPTV",short_name:"VooStream",description:"VooStream IPTV plans, device guides and support.",lang:"en",start_url:"/",display:"standalone",background_color:"#e8dfc9",theme_color:"#0d1d1f",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml"}]}}
