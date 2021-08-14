import PageTemplate from "components/Templates/PageTemplate";
import { Questions, Introduction } from "sections";

function Question({ data }) {
  return (
    <PageTemplate title="Questions" data={data.company}>
      <Introduction />
      <Questions questions={data?.frequently_questions} />
    </PageTemplate>
  );
}

export default Question;

export async function getServerSideProps({ locale }) {
  const res = await fetch(
    `https://nomowsoft.herokuapp.com/v1/frequently_questions?locale=${locale}`
  ).then((response) => response.json());

  const res1 = await fetch(
    `https://nomowsoft.herokuapp.com/v1/companies/1?locale=${locale}`
  ).then((response) => response.json());

  return {
    props: {
      data: {
        ...res.data,
        ...res1.data,
      },
    },
  };
}
