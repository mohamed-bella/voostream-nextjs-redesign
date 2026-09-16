import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";

const plans = [
  { name: "1 month", price: 15, old: 20, note: "A short, flexible subscription.", message: "the%201-month%20IPTV%20plan" },
  { name: "3 months", price: 20, old: 30, note: "The most frequently selected plan.", message: "the%203-month%20IPTV%20plan" },
  { name: "6 months", price: 30, old: 40, note: "A longer term at a lower monthly cost.", message: "the%206-month%20IPTV%20plan" },
  { name: "12 months", price: 40, old: 70, note: "The lowest monthly cost available.", message: "the%2012-month%20IPTV%20plan" },
] as const;
const included = ["11,000+ live channels", "Movies and series", "TV guide (EPG)", "4K / FHD / HD", "Xtream Codes + M3U", "Setup support"];
const contact = { whatsapp: "https://wa.me/33773528321", telegram: "https://t.me/voostream", email: "voostreamapp@gmail.com" };
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": "https://voostream.com/#organization", name: "VooStream", url: "https://voostream.com/", email: contact.email, contactPoint: { "@type": "ContactPoint", telephone: "+33 7 73 52 83 21", contactType: "customer support", availableLanguage: ["English"] } },
  { "@type": "WebSite", "@id": "https://voostream.com/#website", name: "VooStream", url: "https://voostream.com/", inLanguage: "en" },
  { "@type": "Service", name: "VooStream IPTV subscription", serviceType: "IPTV subscription", offers: plans.map((plan) => ({ "@type": "Offer", name: plan.name, price: plan.price, priceCurrency: "USD", url: "https://voostream.com/#pricing" })) },
] };

export default function Home() { return <>
  <a className="skip-link" href="#main-content">Skip to content</a><Header />
  <main id="main-content">
    <section className="hero" id="top"><div className="container hero-grid"><div><p className="eyebrow">VOOSTREAM // IPTV SERVICE</p><h1>Live TV.<br/><em>Simple access.</em></h1><p className="hero-lead">Live TV, sports, movies and series through one IPTV subscription. Choose a plan and contact VooStream for access.</p><div className="hero-actions"><a className="button button-primary" href="#pricing">View plans</a><a className="button button-ghost" href={contact.whatsapp} target="_blank" rel="noopener nofollow">WhatsApp</a></div></div><aside className="hero-log" aria-label="Service summary"><p>SERVICE_STATUS: AVAILABLE</p><dl><div><dt>Channels</dt><dd>11,000+</dd></div><div><dt>Quality</dt><dd>4K / FHD / HD</dd></div><div><dt>Access</dt><dd>Xtream + M3U</dd></div><div><dt>Support</dt><dd>Direct contact</dd></div></dl><span>VOOSTREAM.COM</span></aside></div></section>

    <section className="contact-deck" aria-label="Contact VooStream"><div className="container contact-deck-grid"><p>Speak directly with VooStream</p><a href={contact.whatsapp} target="_blank" rel="noopener nofollow"><small>WhatsApp</small><strong>+33 7 73 52 83 21</strong></a><a href={contact.telegram} target="_blank" rel="noopener nofollow"><small>Telegram channel</small><strong>VooStream</strong></a><a href={`mailto:${contact.email}`}><small>Email</small><strong>{contact.email}</strong></a></div></section>

    <section className="section pricing" id="pricing"><div className="container"><div className="section-head"><div><p className="kicker">PRICING</p><h2>IPTV subscription plans</h2></div><p>Every plan includes the same service. Only the subscription length changes.</p></div><div className="price-grid">{plans.map((plan, index) => <article className={`price-card ${index === 1 ? "popular" : ""}`} key={plan.name}><p className="plan-label">{index === 1 ? "Most selected" : "VooStream access"}</p><h3>{plan.name}</h3><p className="old-price">Was ${plan.old}</p><p className="price"><span>$</span>{plan.price}</p><p className="period">{plan.note}</p><a className="button button-plan" href={`${contact.whatsapp}?text=Hi%2C%20I%20would%20like%20${plan.message}.`} target="_blank" rel="noopener nofollow">Request payment link</a></article>)}</div><ul className="feature-strip">{included.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

    <section className="section chart-section" id="devices"><div className="container chart-grid"><div><p className="kicker">DEVICES</p><h2>Use your screen.</h2><p>VooStream works with common IPTV players on devices you already own.</p><Link className="text-link" href="/iptv-setup">Open setup guide →</Link></div><div className="device-chart"><Link href="/iptv-smart-tv"><span>01</span><strong>Smart TV</strong><small>Samsung / LG / compatible apps</small></Link><Link href="/iptv-firestick"><span>02</span><strong>Firestick</strong><small>Fire TV devices</small></Link><Link href="/iptv-android-tv"><span>03</span><strong>Android TV</strong><small>TV / box / mobile</small></Link><Link href="/iptv-setup"><span>04</span><strong>Other devices</strong><small>Computer / tablet / phone</small></Link></div></div></section>

    <section className="section route-section"><div className="container"><div className="section-head"><div><p className="kicker">Explore VooStream</p><h2>Useful IPTV guides</h2></div><p>Direct answers for plans, devices and setup.</p></div><div className="route-grid"><Link href="/iptv-subscription"><span>01</span><h3>IPTV subscription</h3><p>What is included and how access works.</p></Link><Link href="/iptv-pricing"><span>02</span><h3>IPTV pricing</h3><p>Compare every VooStream plan.</p></Link><Link href="/live-sports-iptv"><span>03</span><h3>Live sports IPTV</h3><p>Connection and device guidance for live events.</p></Link><Link href="/movies-series-iptv"><span>04</span><h3>Movies and series</h3><p>Use the VOD library on supported players.</p></Link></div></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div><p className="kicker">FAQ</p><h2>Questions before you subscribe</h2><p>Contact VooStream through WhatsApp, Telegram or email for a direct answer.</p></div><Faq /></div></section>
  </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
</>; }
