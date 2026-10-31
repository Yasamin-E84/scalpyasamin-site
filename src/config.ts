const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://scalpyasamin.com";

export const siteConfig = {
  siteUrl: siteUrl.replace(/\/$/, ""),
  indexing: process.env.NEXT_PUBLIC_INDEXING !== "false",
  brand: {
    name: "اسکالپ یاسمین",
    latinName: "Scalp Yasamin",
    category: "مراقبت تخصصی از کف سر و مو",
    description:
      "اسکالپ یاسمین، مرکز مراقبت تخصصی از کف سر و مو برای بانوان و آقایان در ملاصدرا، تهران.",
    email: "scalpyasamin@gmail.com",
    phone: null as string | null,
  },
  seo: {
    title: "اسکالپ یاسمین | مراقبت تخصصی از کف سر و مو در تهران",
    description:
      "اسکالپ یاسمین؛ مراقبت تخصصی و پاکسازی کف سر، رسیدگی به شوره، خارش و دغدغه‌های مو برای بانوان و آقایان در ملاصدرا، تهران. به‌زودی.",
    keywords: [
      "Scalp Yasamin",
      "اسکالپ یاسمین",
      "اسکالپ تهران",
      "مراقبت از کف سر",
      "پاکسازی تخصصی کف سر",
      "شوره سر",
      "خارش کف سر",
      "ریزش مو",
      "نازکی مو",
      "مراقبت از مو",
      "ملاصدرا تهران",
    ],
  },
  location: {
    address:
      "تهران، خیابان ملاصدرا، خیابان شیراز شمالی، پلاک ۱۸۵، کلینیک غرب، طبقه دوم",
    plusCode: "QC62+F33, Tehran, Tehran Province, Iran",
    city: "تهران",
    region: "استان تهران",
    country: "IR",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=QC62%2BF33%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran",
  },
  hours: {
    days: "شنبه تا پنجشنبه",
    opens: "09:00",
    closes: "18:00",
    display: "شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر · جمعه تعطیل",
  },
  services: [
    "پاکسازی تخصصی کف سر",
    "رسیدگی به شوره، پوسته‌ریزی، خارش و التهاب کف سر",
    "رسیدگی به ریزش و نازکی مو و خدمات مرتبط با ضخیم‌سازی مو",
    "خدمات مرتبط با آلوپسی و مشکلات انگلی کف سر",
  ],
  socials: [
    {
      key: "instagram",
      label: "اینستاگرام",
      username: "@scalpyasamin",
      url: "https://www.instagram.com/scalpyasamin/",
    },
    {
      key: "telegram",
      label: "تلگرام",
      username: "@scalpyasamin",
      url: "https://t.me/scalpyasamin",
    },
    {
      key: "rubika",
      label: "روبیکا",
      username: "scalpyasamin",
      url: "https://rubika.ir/scalpyasamin",
    },
    {
      key: "bale",
      label: "بله",
      username: "scalpyasamin",
      url: "https://ble.ir/scalpyasamin",
    },
  ],
  whatsapp: { username: "scalpyasamin", url: null as string | null },
};
