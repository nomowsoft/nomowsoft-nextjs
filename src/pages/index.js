import PageTemplate from "components/Templates/PageTemplate";
import { Introduction, Identity, Services, Clients } from "sections";

export default function Home() {
  return (
    <PageTemplate title="Home Page">
      <Introduction />
      <Identity />
      <Services />
      <Clients />
    </PageTemplate>
  );
}
