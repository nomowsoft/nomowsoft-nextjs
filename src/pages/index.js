import PageTemplate from "components/Templates/PageTemplate";
import { Introduction, Identity, Services, Clients, AboutUs } from "sections";

export default function Home(props) {
  console.log(`props`, props)
  return (
    <PageTemplate title="Home Page">
      <Introduction />
      <Identity />
      <Services />
      <Clients />
      <AboutUs />
    </PageTemplate>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json()
  );
  return {
    props: {
      data: res,
    }, // will be passed to the page component as props
  };
}
