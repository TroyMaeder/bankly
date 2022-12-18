import { FC } from "react";

interface Props {
  loading: boolean;
  children: React.ReactNode;
  error: boolean;
}

const StateHandler: FC<Props> = ({ children, loading, error }) => {
  const message = loading ? "Loading..." : "Error...";
  if (error || loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>{message}</div>
    );
  }

  return <>{children}</>;
};

export default StateHandler;
