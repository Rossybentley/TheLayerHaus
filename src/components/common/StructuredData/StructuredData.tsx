const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "The Layer Haus",

    description:
      "Interior decoration company specializing in bespoke curtains, premium blinds, wallpapers and interior styling.",

    url: "https://the-layer-haus.com",

    telephone: "+2347010353293",

    email: "Layerhaus24@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Yaba",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
    },

    sameAs: [
      "https://www.instagram.com/layerhaus.ng",
      "https://www.tiktok.com/@layerhaus.ng",
    ],

    areaServed: {
      "@type": "City",
      name: "Lagos",
    },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  );
};

export default StructuredData;
