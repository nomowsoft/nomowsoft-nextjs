import React from "react";
// import useTranslation from "next-translate/useTranslation";
// import { useRouter } from "next/router";
import {
  StartFormContainer,
  StartFormBox,
  Form,
  TextInput,
  Label,
  FormFoot,
  SubmitBtn,
} from "./StartForm.styles";

const StartForm = () => {
  const [state, setState] = React.useState({});

  // const theme = React.useContext(ThemeContext);
  // const i18n = useTranslation();
  // const { push } = useRouter();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  console.log(`state`, state)
  return (
    <StartFormBox>
      <StartFormContainer>
        <p>logo here</p>
        <Form onSubmit={() => console.log(`state`, state)}>
          <Label>
            first name
            <TextInput
              name="first_name"
              value={state.first_name}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            last name
            <TextInput
              name="last_name"
              value={state.first_name}
              required
              onChange={handleChange}
            />
          </Label>
          <Label col={2}>
            email
            <TextInput
              name="email"
              value={state.first_name}
              required
              onChange={handleChange}
            />
          </Label>
          <Label col={2}>
            phone number
            <TextInput
              name="phone number"
              value={state.phone_number}
              required
              type="number"
              onChange={handleChange}
            />
          </Label>
          <FormFoot>
            <SubmitBtn
              title="submit"
              type="submit"
              btnStyle="success"
              small
              onClick={() => console.log(`state`, state)}
            />
          </FormFoot>
        </Form>
      </StartFormContainer>
    </StartFormBox>
  );
};

export default StartForm;
