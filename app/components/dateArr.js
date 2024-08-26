const datesSinceAugust = () => {
  const today = new Date();
  const startOfAug = new Date(2024, 7, 1);
  const difference = today - startOfAug;
  const diffDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  // console.log(
  //   `The date is ${today} and the start of the year is ${startOfAug}, the diference is ${diffDays}`,
  // );
  let dateToPush = startOfAug;
  let dateArr = [];

  for (let i = 0; i <= diffDays; i++) {
    dateToPush.setUTCDate(dateToPush.getUTCDate() + 1);
    dateArr.push({
      dateMap: dateToPush.toUTCString().substring(0, 16),
      dateStr: dateToPush.toISOString().substring(0, 10),
    });
  }
  // console.log(dateArr);

  return dateArr;
};
export default datesSinceAugust;
