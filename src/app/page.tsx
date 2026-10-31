import Image from "next/image";
import { CopyId } from "@/components/copy-id";
import { siteConfig as c } from "@/config";

const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${c.siteUrl}/#website`,
      url: c.siteUrl,
      name: c.brand.latinName,
      alternateName: c.brand.name,
      inLanguage: "fa-IR",
      publisher: { "@id": `${c.siteUrl}/#business` },
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${c.siteUrl}/#business`,
      name: c.brand.latinName,
      alternateName: c.brand.name,
      description: c.brand.description,
      url: c.siteUrl,
      image: `${c.siteUrl}/brand/scalp-yasamin.png`,
      logo: `${c.siteUrl}/brand/scalp-yasamin.svg`,
      email: c.brand.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.location.address,
        addressLocality: c.location.city,
        addressRegion: c.location.region,
        addressCountry: c.location.country,
      },
      hasMap: c.location.mapUrl,
      areaServed: { "@type": "City", name: c.location.city },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: c.hours.opens,
        closes: c.hours.closes,
      }],
      contactPoint: [{
        "@type": "ContactPoint",
        contactType: "customer service",
        email: c.brand.email,
        availableLanguage: ["Persian"],
      }],
      sameAs: c.socials.map((social) => social.url),
      knowsAbout: c.services,
    },
  ],
};

export default function HomePage() {
  return <>
    <a className="skip-link" href="#home">رفتن به محتوای اصلی</a>
    <main className="announcement-page" id="home" aria-labelledby="page-title">
      <article className="announcement">
        <div className="paper-panel">
          <div className="edition-line">
            <span>تهران، ملاصدرا</span>
            <span className="edition-mark" aria-hidden="true">✳</span>
            <span lang="en" dir="ltr">SCALP & HAIR CARE</span>
          </div>

          <div className="identity">
            <Image className="brand-logo" src="/brand/scalp-yasamin.svg" alt="Scalp Yasamin — لوگوی اصلی اسکالپ یاسمین" width={718} height={578} priority />
            <h1 id="page-title">اسکالپ یاسمین</h1>
            <p className="brand-description">مراقبت تخصصی از کف سر و مو <span>برای بانوان و آقایان</span></p>
            <div className="coming-soon">
              <p>به‌زودی</p>
              <span lang="en" dir="ltr">COMING SOON</span>
            </div>
            <p className="website-note">وب‌سایت ما در حال آماده‌سازی است.</p>
          </div>

          <ul className="service-notes" aria-label="خدمات اسکالپ یاسمین">
            <li>پاکسازی تخصصی کف سر</li>
            <li>رسیدگی به شوره و خارش</li>
            <li>مراقبت از موهای نازک و کم‌پشت</li>
          </ul>
        </div>

        <div className="contact-panel">
          <section className="address-block" aria-labelledby="address-title">
            <h2 id="address-title">اینجا پیدایمان کنید<span aria-hidden="true">↙</span></h2>
            <address>{c.location.address}</address>
            <p className="hours-line">{c.hours.display}</p>
            <a className="map-link" href={c.location.mapUrl} target="_blank" rel="noopener noreferrer">مشاهده روی نقشه <span aria-hidden="true">↗</span></a>
          </section>
          <section className="contact-block" aria-labelledby="contact-title">
            <h2 id="contact-title">در ارتباط باشیم<span lang="en" dir="ltr">STAY IN TOUCH</span></h2>
            <ul className="social-list" aria-label="شبکه‌های اجتماعی">
              {c.socials.map((social) => <li key={social.key}><a href={social.url} target="_blank" rel="noopener noreferrer"><span>{social.label}</span><b dir="ltr">{social.username}</b><span className="social-arrow" aria-hidden="true">↗</span></a></li>)}
            </ul>
            <div className="direct-contacts">
              <a className="email-address" href={`mailto:${c.brand.email}`}><span>ایمیل</span><b dir="ltr">{c.brand.email}</b><span className="social-arrow" aria-hidden="true">↗</span></a>
              <CopyId value={c.whatsapp.username} />
            </div>
          </section>
        </div>
      </article>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
  </>;
}
