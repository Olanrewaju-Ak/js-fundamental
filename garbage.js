// const smartGarbage = function (trash, bins) {
//   // Your code in here ...
//   const keys = Object.keys(bins);
//   console.log(keys);
//   for (i = 0; i < keys.length; i++) {
//     if (trash === i) {
//       console.log(i);
//       bins[i] += 1;
//     }
//     // return bins;
//   }
// };
// smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

const smartGarbage = function (trash, bins) {
  if (trash === "waste") {
    bins.waste++;
  } else if (trash === "recycling") {
    bins.recycling++;
  } else if (trash === "compost") {
    bins.compost++;
  }
  return bins;
};
