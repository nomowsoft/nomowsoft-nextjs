import React from "react";
import Image from "next/image";
import { Container } from "./ComingSoon.styles";
import useTranslation from "next-translate/useTranslation";

const ComimgSoon = ({ comingsoon, local }) => {
  const lang = local;
  const t = useTranslation();
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-center">
          {comingsoon?.map((data) => (
            <div key={data.id} className="col-lg-3">
              <div className="card shadow">
                <Image
                  src={data.image}
                  alt="..."
                  className="card-img-top"
                  width={300}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a
                    href={`/${lang}/blogs/${data.id}`}
                    className="btn btn-primary text-light"
                  >
                    {t.t("common:showmore")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ComimgSoon;
