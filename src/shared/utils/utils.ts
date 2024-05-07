const formatter = new Intl.DateTimeFormat("ru");

export const formatDate = (date: number) => {
  return formatter.format(date);
};
