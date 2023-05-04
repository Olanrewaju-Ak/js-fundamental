const checkAir = function (samples, threshold) {
  // Code here!
  let clean = 0;
  let dirty = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "clean") {
      clean += 1;
    } else {
      dirty += 1;
    }
  }
  const total = clean + dirty;
  console.log(total);
  let percentageDirty = dirty / total;
  if (percentageDirty < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    ["clean", "clean", "dirty", "clean", "dirty", "clean", "clean", "dirty", "clean", "dirty"],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9));
