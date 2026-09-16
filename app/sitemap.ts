import type { MetadataRoute } from "next";
export const dynamic="force-static";
const routes=["","/iptv-subscription","/iptv-pricing","/iptv-channels","/iptv-setup","/iptv-smart-tv","/iptv-firestick","/iptv-android-tv","/live-sports-iptv","/movies-series-iptv","/contact","/privacy","/terms"];
export default function sitemap():MetadataRoute.Sitemap{const lastModified=new Date("2026-09-16");return routes.map((route,index)=>({url:`https://voostream.com${route}/`,lastModified,changeFrequency:index===0?"weekly":"monthly",priority:index===0?1:index<10?0.8:0.35}))}
