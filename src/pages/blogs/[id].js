import React from "react";
import PageTemplate from "components/Templates/PageTemplate";
import Image from "next/image";
import { Container } from "sections/ComingSoon/ComingSoon.styles";
import useTranslation from "next-translate/useTranslation";

export const getStaticPaths = async () => {
  const res = await fetch(`
    https://hr.nomowsoft.com/web/blogs?lang=ar_001
  `);
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  var lang;
  if (locale == "ar") {
    lang = "ar_001";
  } else {
    lang = "en";
  }
  const id = params.id;
  const res = await fetch(
    `https://hr.nomowsoft.com/web/blogs?lang=${lang}&id=` + id
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  return (
    <PageTemplate>
      <Container>
        <div className="container">
          {post?.map((post) => (
            <div className="row" key={post.id}>
              <div className="col-lg-5">
                <Image src={post.image} alt="..." width={2000} height={2000} />
              </div>
              <div className="col-lg-7 px-4">
                <h2 className="text-dark">{post.title}</h2>
                <h5 className="text-dark mt-4">{post.description}</h5>
                <p className="text-dark">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageTemplate>
  );
};
export default Post;
