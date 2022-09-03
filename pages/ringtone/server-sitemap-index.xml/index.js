import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  let posts = await fetch("https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/media?_fields=slug&per_page=100&mime_type=audio/mpeg");
  posts = await posts.json();
  const newsSitemaps = posts.map((item) => ({
    loc: `https://www.ringtonez.in/${item.slug.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() {}