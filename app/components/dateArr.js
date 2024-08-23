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
  console.log(dateArr);
  return dateArr;
};
export default dateArr;
