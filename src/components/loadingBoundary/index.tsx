import { FC } from "react";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

const LoadingBoundary: FC<Props> = ({ children, loading }) => {
  if (loading) {
    return (
      <h6 style={{ display: "flex", justifyContent: "center" }}>Loading...</h6>
    );
  }

  return <>{children}</>;
};

export default LoadingBoundary;
