import React from "react";
import Image from "next/image";
// import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
  StartFormContainer,
  StartFormBox,
  Form,
  TextInput,
  Label,
  ApiMassage,
  FormFoot,
  SubmitBtn,
  TextArea,
} from "./StartForm.styles";

const StartForm = () => {
  const i18n = useTranslation();
  const { locale } = useRouter();
  const [state, setState] = React.useState({});
  const [apiMsg, setApiMsg] = React.useState({});
  const [fetching, setFetching] = React.useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    const service_request = {
      description: state.description,
      requester_name: `${state.first_name} ${state.last_name}`,
      requester_email: state.email,
      requester_mobile: state.mobile,
    };
    fetch(
      `https://nomowsoft.herokuapp.com/v1/service_requests?locale=${locale}`,
      {
        method: "POST",
        body: JSON.stringify({ service_request }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          setApiMsg({
            text: res.statusText,
            type: "success",
          });
        } else {
          setApiMsg({
            text: res.statusText || "something went wrong",
            type: "error",
          });
        }
      })
      .catch(() => {
        setApiMsg({
          text: "something went wrong",
          type: "error",
        });
      })
      .finally(() => setFetching(false));
  };

  return (
    <StartFormBox>
      <StartFormContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Image src="/assets/logo.svg" width="60px" height="60px" alt="" />
        </div>
        <ApiMassage isErr={apiMsg.type === "error"}>
          {apiMsg.text && apiMsg.text}
        </ApiMassage>
        <Form onSubmit={handleSubmit}>
          <Label>
            {i18n.t("common:first_name")}
            <TextInput
              name="first_name"
              value={state.first_name}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            {i18n.t("common:last_name")}
            <TextInput
              name="last_name"
              value={state.last_name}
              required
              onChange={handleChange}
            />
          </Label>
          <Label col={2}>
            {i18n.t("common:email")}
            <TextInput
              name="email"
              value={state.email}
              required
              type="email"
              onChange={handleChange}
            />
          </Label>
          <Label col={2}>
            {i18n.t("common:mobile")}
            <TextInput
              name="mobile"
              value={state.phone_number}
              required
              type="number"
              onChange={handleChange}
            />
          </Label>
          <Label col={2}>
            {i18n.t("common:description")}
            <TextArea
              name="description"
              value={state.phone_number}
              required
              onChange={handleChange}
            />
          </Label>
          <FormFoot>
            <SubmitBtn
              disabled={fetching}
              title="submit"
              type="submit"
              btnStyle="success"
              small
            />
          </FormFoot>
        </Form>
      </StartFormContainer>
    </StartFormBox>
  );
};

export default StartForm;
