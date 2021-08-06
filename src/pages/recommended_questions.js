import PageTemplate from "components/Templates/PageTemplate";
import { Questions, Introduction } from "sections";

function Question() {
  return (
    <PageTemplate title="Questions">
      <Introduction />
      <Questions />
    </PageTemplate>
  );
}

export default Question;
