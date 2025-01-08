import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ title, description, keywords }) => {
  const hasDescription = description.length > 0;
  const hasKeywords = keywords.length > 0;
  const defaultDescription =
    "Creative direction, set and props styling, wardrobe styling, color consulting. Based in Portland, OR.";

  if (!hasDescription) {
    description = defaultDescription;
  }
  const [canonicalUrl, setCanonicalUrl] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonicalUrl(window.location.href);
    }
  }, []);

  return (
    <Head>
      {/* Title */}
      <title>{`${title.toUpperCase()} | General Qu`}</title>
      <meta
        property="og:title"
        content={`${title.toUpperCase()} | General Qu`}
      />
      <meta
        name="twitter:title"
        content={`${title.toUpperCase()} | General Qu`}
      />

      {/* Description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      {/* Keywords */}
      {hasKeywords && <meta name="keywords" content={keywords} />}
      {hasKeywords && <meta name="twitter:keywords" content={keywords} />}

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Image */}
      <meta
        property="og:image"
        content="https://res.cloudinary.com/glasswavs/image/upload/v1736195098/General%20Qu/about/NEWBIO_PHOTO_ulnfk4.jpg"
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/glasswavs/image/upload/v1736195098/General%20Qu/about/NEWBIO_PHOTO_ulnfk4.jpg"
      />
      <meta property="twitter:card" content="summary_large_image"></meta>

      {/* Other */}
      <meta property="og:site_name" content="General Qu"></meta>
      <meta property="og:url" content={canonicalUrl}></meta>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
};

export default SEO;
