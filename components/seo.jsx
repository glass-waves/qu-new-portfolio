import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ title, description, keywords }) => {
  const hasDescription = description.length > 0;
  const hasKeywords = keywords.length > 0;
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
      {hasDescription && <meta name="description" content={description} />}
      {hasDescription && (
        <meta property="og:description" content={description} />
      )}
      {hasDescription && (
        <meta name="twitter:description" content={description} />
      )}

      {/* Keywords */}
      {hasKeywords && <meta name="keywords" content={keywords} />}
      <meta name="keywords" content={keywords} />

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
    </Head>
  );
};
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
};

export default SEO;
