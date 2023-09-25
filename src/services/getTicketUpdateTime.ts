export const getTicketUpdateTime = (date: string) => {
  const currentDate = new Date().getTime();
  const updatedDate = new Date(date).getTime();

  const timeDiff = Math.abs(currentDate - updatedDate);
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24) - 1);

  let updatedString = '';

  if (daysDiff === 1) {
    updatedString = 'Updated 1 day ago';
  } else {
    updatedString = `Updated ${daysDiff} days ago`;
  }

  return updatedString;
};
