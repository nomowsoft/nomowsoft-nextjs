import PageTemplate from "components/Templates/PageTemplate";
import { ComingSoon } from "sections";

export const getStaticProps = async ({ locale }) => {
  var lang;
  if (locale == "ar") {
    lang = "ar_001";
  } else {
    lang = "en";
  }
  const res = await fetch(`
      https://hr.nomowsoft.com/web/blogs?lang=${lang}
  `);
  const data = await res.json();
  return {
    props: {
      locale: locale,
      posts: data,
    },
  };
};

export default function Blogs({ posts, locale }) {
  return (
    <PageTemplate title="Blogs">
      <ComingSoon comingsoon={posts} local={locale} />
    </PageTemplate>
  );
}
