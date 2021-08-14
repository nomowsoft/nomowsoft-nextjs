import React from "react";
import { ic_add } from "react-icons-kit/md/ic_add";
import { minus } from "react-icons-kit/feather/minus";
import { Icon } from "react-icons-kit";
import {
  QuestionsContainer,
  QuestionsBox,
  QuestionsTitle,
  Item,
  ItemsBox,
} from "./Questions.styles";

const Questions = ({ questions }) => {
  const [open, setOpen] = React.useState(null);

  return (
    <QuestionsBox>
      <QuestionsContainer>
        <QuestionsTitle>Recommended Questions</QuestionsTitle>
        <ItemsBox animate>
          {questions.map((i) => (
            <Item key={i} active={open === i}>
              <div
                className="title-box"
                onClick={() => setOpen((pre) => (pre === i ? null : i))}
              >
                <Icon icon={open === i ? minus : ic_add} size={25} />
                <h3> {i} What are the requirements for creating a website?</h3>
              </div>
              {open === i && (
                <p className="description">
                  What are the requirements for creating a website? What are the
                  requirements for creating a website?
                </p>
              )}
            </Item>
          ))}
        </ItemsBox>
      </QuestionsContainer>
    </QuestionsBox>
  );
};

export default Questions;
