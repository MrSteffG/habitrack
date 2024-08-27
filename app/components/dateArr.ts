const datesSinceAugust = () => {
  const today: Date = new Date();
  const startOfAug: Date = new Date(2024, 7, 1);
  const difference: any = today.valueOf() - startOfAug.valueOf();
  const diffDays = Math.floor(difference / (1000 * 60 * 60 * 24));

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
