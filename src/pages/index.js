import PageTemplate from "components/Templates/PageTemplate";
import { Introduction, Identity } from "sections";

export default function Home() {
  return (
    <PageTemplate title="Home Page">
      <Introduction />
      <Identity />
    </PageTemplate>
  );
}
