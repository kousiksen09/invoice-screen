export const dateFormatter = (date) => {
  const onlyDate = date.slice(0, 10);
  const day = onlyDate.slice(9, 10);
  const month = onlyDate.slice(6, 7);
  const year = onlyDate.slice(0, 4);

  const formattedMonth = monthsPick(parseInt(month));
  return `${day} - ${formattedMonth} - ${year}`;
};
export const monthsPick = (month) => {
  switch (month) {
    case 1:
      return 'Jan';

    case 2:
      return 'Feb';

    case 3:
      return 'Mar';

    case 4:
      return 'Apr';

    case 5:
      return 'May';

    case 6:
      return 'Jun';

    case 7:
      return 'Jul';

    case 8:
      return 'Aug';

    case 9:
      return 'Sept';

    case 10:
      return 'Oct';

    case 11:
      return 'Nov';

    case 12:
      return 'Dec';

    default:
      return 'NoNe';
  }
};
