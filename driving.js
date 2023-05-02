const carPassing = function (cars, speed) {
  let newTime = Date.now();
  const obj = { time: newTime, speed: speed };
  cars.push(obj);
  return cars;
};

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  // go through the vegetable array
  //compare the metric to the key/value pair in each array element
  // get the highest of all the values
  // display the name of the submitter with the highest value.
  let bestVegetable = null;
  let bestMetricValue = -Infinity;
  for (let vegetable of vegetables) {
    if (vegetable[metric] > bestMetricValue) {
      bestMetricValue = vegetable[metric];
      bestVegetable = vegetable.submitter;
    }
  }
  return bestVegetable;
};
