const findShort = function (string) {
  const strArray = string.split(' ');
  let shortLength = strArray[0].length;
  for (const word of strArray) {
    if (word.length < shortLength) {
      shortLength = word.length;
    }
  }

  return shortLength;
};

//Alternative Solution
function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

findShort('bitcoin take over the worls maybe who knows perhaps');
findShort("Let's travel abroad shall we");
