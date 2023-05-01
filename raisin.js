const raisingAlarm = function (cookie) {
  for (item of cookie) {
    if (item !== "🍫") {
      return "Raisin alert!";
    } 
  }         
  return "All good!"
};

const raisingAlarmArray = function (cookies) {  
  let result = [];
  for (cookie of cookies) {
    result.push(raisingAlarm(cookie));
  }
  return result
}

console.log(raisingAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisingAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisingAlarm(["🍫", "🍫", "🍫"]));

console.log(
  raisingAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);