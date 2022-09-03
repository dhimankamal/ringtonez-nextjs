import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  let posts = await fetch("https://ringtonez.dhimaan.in/index.php/wp-json/wp/v2/posts?_fields=slug");
  posts = await posts.json();
  const newsSitemaps = posts.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}${item.slug.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() {}