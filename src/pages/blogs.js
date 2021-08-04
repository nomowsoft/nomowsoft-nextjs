import PageTemplate from "components/Templates/PageTemplate";
import { ComingSoon } from "sections";

export default function Home() {
  return (
    <PageTemplate title="Home Page">
      <ComingSoon />
    </PageTemplate>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: {},
    },
  };
}
