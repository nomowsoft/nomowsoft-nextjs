import PageTemplate from "components/Templates/PageTemplate";
import { Introduction, Identity, Services, Clients, AboutUs } from "sections";

export default function Home({ data }) {
  return (
    <PageTemplate title="Home" data={data.company}>
      <Introduction />
      <Identity about_us={data.company.about_us} />
      <Services services={data.company.services} />
      <Clients clients={data.company.clients} />
      <AboutUs feedbacks={data.company.feedbacks} />
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
