// var date = new Date();

// date = date.toLocaleString("en-Us", {
//   hour: "numeric",
//   weekday: "long",
//   month: "short",
// });

// console.log(date);

console.log(
  Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(6538)
);
