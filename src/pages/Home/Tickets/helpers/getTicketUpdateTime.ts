export const getTicketUpdateTime = (date: string) => {
  const currentDate = new Date().getTime();
  const updatedDate = new Date(date).getTime();

  const timeDiff = Math.abs(currentDate - updatedDate);
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  let updatedString = '';

  if (daysDiff === 0) {
    updatedString = 'Updated today';
  } else if (daysDiff === 1) {
    updatedString = 'Updated 1 day ago';
  } else {
    updatedString = `Updated ${daysDiff} days ago`;
  }

  return updatedString;
};
