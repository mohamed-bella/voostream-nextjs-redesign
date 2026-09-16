import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Section = { title: string; text: string };
type Props = { label: string; title: string; intro: string; description: string; sections: Section[]; image?: { src: string; alt: string; width: number; height: number }; type?: "Article" | "HowTo" };

export function SeoLanding({ label, title, intro, description, sections, image, type = "Article" }: Props) {
  const schema = { "@context": "https://schema.org", "@type": type, headline: title, description, inLanguage: "nb-NO", publisher: { "@type": "Organization", name: "IPTV til Norge", url: "https://iptvtilnorge.com/" }, ...(image ? { image: `https://iptvtilnorge.com${image.src}` } : {}), ...(type === "HowTo" ? { step: sections.map((section) => ({ "@type": "HowToStep", name: section.title, text: section.text })) } : {}) };
  return <><Header /><main className="seo-page"><section className="legal-header"><div className="container"><nav className="seo-breadcrumbs" aria-label="Brødsmulesti"><Link href="/">Hjem</Link><span aria-hidden="true">/</span><span>{label}</span></nav><span className="kicker">{label}</span><h1>{title}</h1><p>{intro}</p></div></section><article className="legal-content seo-content container">{image && <Image className="seo-image" src={image.src} alt={image.alt} width={image.width} height={image.height} priority sizes="(max-width: 760px) 100vw, 760px" />}<p className="seo-lead">{description}</p><div className="seo-card-grid">{sections.map((section) => <section className="seo-card" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</div><div className="seo-next"><h2>Vil du komme i gang?</h2><p>Se abonnementene, eller kontakt oss hvis du vil ha hjelp med riktig enhet og oppsett.</p><div><Link className="button button-primary" href="/#priser">Se priser <span>→</span></Link><a className="button button-ghost dark-ghost" href="https://wa.me/33773528321?text=Hei%2C%20jeg%20trenger%20hjelp%20med%20IPTV." target="_blank" rel="noopener nofollow">Spør på WhatsApp</a></div></div></article></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></>;
}
