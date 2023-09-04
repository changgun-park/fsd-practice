import { styled } from "styled-components";
import { Row } from "antd";
import { Link } from "react-router-dom";

interface TaskRowProps {
  data: import("shared/api").Task;
  titleHref: string;
  before?: React.ReactNode;
}

export const TaskRow = ({ data, titleHref, before }: TaskRowProps) => {
  const title = titleHref ? (
    <Link to={titleHref}>{data.title}</Link>
  ) : (
    data.title
  );

  return (
    <StyledRow $completed={data.completed}>
      {before}
      {title}
    </StyledRow>
  );
};

const StyledRow = styled(Row)<{ $completed?: boolean }>`
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  opacity: ${({ $completed }) => ($completed ? 0.5 : 1)};
`;
