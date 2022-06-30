export const sorttedData = (arr, key) => {
  let arr2 = [];

  arr.forEach((x) => {
    // Checking if there is any object in arr2
    // which contains the key value
    x["occurance"] = 1;
    if (arr2.length === 0) {
      arr2.push(arr[0]);
    } else {
      // If yes! then increase the occurrence by 1
      arr2.forEach((k) => {
        if (k[key] === x[key]) {
          k["occurance"]++;
          x["occurance"]++;
        }
      });

      if (x["occurance"] === 1) {
        arr2.push(x);
      }
    }
  });

  return arr2;
};
