export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Submitly",
    alternateName: [
      "Submitly App",
      "Submitly - Homework Submission"
    ],
    url: "https://submitlyapp.github.io/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}