const dateArr = (habit, habitId) => {
  const today = new Date();
  const janFirst = new Date("2024-08-01");
  const timeDifference = today.getTime() - janFirst.getTime();
  const dayDifference = Math.round(timeDifference / (1000 * 3600 * 24));

  let dateArr = [];

  for (let i = dayDifference; i > 0; i--) {
    let date = new Date();
    date.setDate(date.getDate() - i);
    console.log(date);

    const weekday = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
    ];
    const day = weekday[date.getDate()];
    dateArr.push({
      id: i,
      completionDate: date.getDate().toString(),
      completionDay: day,
      done: false,
      habitId: habitId,
    });
  }

  return dateArr;
};
export default dateArr;

export const datesSinceAugust = () => {
  const today = new Date();
  const startOfAug = new Date(2024, 7, 0);
  const difference = today - startOfAug;
  const diffDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  // console.log(
  //   `The date is ${today} and the start of the year is ${startOfAug}, the diference is ${diffDays}`,
  // );
  let dateToPush = startOfAug;
  let dateArr = [];

  for (let i = 0; i < diffDays; i++) {
    dateToPush.setUTCDate(dateToPush.getUTCDate() + 1);
    dateArr.push(dateToPush.toString().substring(0, 15));
  }
  // console.log(dateArr);
  return dateArr;
};
