export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://intime.tj/#organization",

    name: "IN TIME — Бюро переводов",
    alternateName: [
      "IN TIME",
      "Бюро переводов IN TIME",
      "Маркази тарҷумаи IN TIME",
    ],

    url: "https://intime.tj/",
    telephone: "+992902814477",

    description:
      "Бюро переводов IN TIME в Душанбе, Таджикистан. Письменный и устный перевод документов, нотариальное заверение, апостиль, легализация и другие услуги перевода.",

    image: "https://intime.tj/founder.jpg",

    address: {
      "@type": "PostalAddress",
      streetAddress: "проспект Рудаки, 83, ЦУМ, 3 этаж, офис 16к",
      addressLocality: "Душанбе",
      addressCountry: "TJ",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.580686,
      longitude: 68.786256,
    },

    areaServed: [
      {
        "@type": "City",
        name: "Душанбе",
      },
      {
        "@type": "Country",
        name: "Таджикистан",
      },
    ],

    serviceType: [
      "Перевод документов",
      "Письменный перевод",
      "Устный перевод",
      "Нотариальный перевод",
      "Нотариальное заверение",
      "Апостиль",
      "Легализация документов",
      "Перевод для визы",
    ],

    priceRange: "$$",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
