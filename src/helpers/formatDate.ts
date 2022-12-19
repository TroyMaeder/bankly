import { format } from "date-fns";

const formatDate = (date: string): string => {
  const d = new Date(date);

  return `${format(d, "dd MMMM yyyy")}`;
};

export default formatDate