import { Helmet } from "react-helmet-async";

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogType?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

const SITE_URL = "https://abhishekpanda.redirectme.net";
const SITE_NAME = "Abhishek Panda";
const TWITTER_HANDLE = "@abhishekpanda";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/portarit.jpeg`;

export default function SeoHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageWidth = "600",
  ogImageHeight = "600",
  ogType = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}: SeoHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = canonical || SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no, address=no, email=no" />
      <meta name="author" content="Abhishek Panda" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} Abhishek Panda`} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:determiner" content="" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:domain" content="abhishekpanda.redirectme.net" />

      <meta property="article:author" content="https://www.linkedin.com/in/abhishek-panda01" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      <meta name="classification" content="Finance, Business Strategy, Investment Research" />
      <meta name="target" content="all" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}
