import PageTemplate from "components/Templates/PageTemplate";
import { ComingSoon } from "sections";

export default function Blogs({ data }) {
  return (
    <PageTemplate title="Blogs" data={data.company}>
      <ComingSoon />
    </PageTemplate>
  );
}

export async function getStaticProps({ locale }) {
  const res = await fetch(
    `https://nomowsoft.herokuapp.com/v1/companies/1?locale=${locale}`
  ).then((response) => response.json());

  return {
    props: {
      data: res.data,
    },
  };
}
