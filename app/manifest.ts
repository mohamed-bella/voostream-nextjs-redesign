import type { MetadataRoute } from "next";
export const dynamic="force-static";
export default function manifest():MetadataRoute.Manifest{return{name:"VooStream IPTV",short_name:"VooStream",description:"VooStream IPTV plans, device guides and support.",lang:"en",start_url:"/",display:"standalone",background_color:"#181818",theme_color:"#181818",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml"}]}}
