import { Link } from "react-router-dom";
import { Card } from "antd";
import type { PropsWithChildren } from "react";

export type TaskCardProps = PropsWithChildren<{
  data?: import("shared/api").Task;
  titleHref?: string;
}> &
  import("antd").CardProps;

export default function TaskCard({
  data,
  titleHref,
  children,
  ...cardProps
}: TaskCardProps) {
  if (!data && !cardProps.loading) return null;

  return (
    <Card title={`Task#${cardProps.loading ? "" : data?.id}`}>
      {titleHref ? <Link to={titleHref}>{data?.title}</Link> : data?.title}
      {children}
    </Card>
  );
}
