import PageTemplate from "components/Templates/PageTemplate";
import { ComingSoon } from "sections";

export default function Blogs() {
  return (
    <PageTemplate title="Blogs">
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
