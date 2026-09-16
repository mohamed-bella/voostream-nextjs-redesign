import type { MetadataRoute } from "next";
export const dynamic="force-static";
export default function manifest():MetadataRoute.Manifest{return{name:"IPTV til Norge",short_name:"IPTV Norge",lang:"nb-NO",start_url:"/",display:"standalone",background_color:"#07131f",theme_color:"#07131f",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml"}]}}
