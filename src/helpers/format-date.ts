import { parse, format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDate = (inputDate: string) => {
  const parsedDate = parse(inputDate, "dd.MM.yy", new Date());
  const formattedDate = format(parsedDate, "dd MMM yyyy, EEE", { locale: ru });
  return formattedDate;
};
