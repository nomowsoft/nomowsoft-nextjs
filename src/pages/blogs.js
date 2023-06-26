import PageTemplate from "components/Templates/PageTemplate";
import { ComingSoon } from "sections";

export const getStaticProps = async () => {
  const res =  await fetch("https://hr.nomowsoft.com/web/about_us?lang=00_ar")
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  }
}


export default function Blogs({ data }) {
  return (
    <PageTemplate title="Blogs" data={data}>
      <ComingSoon />
    </PageTemplate>
  );
}
