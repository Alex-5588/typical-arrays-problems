exports.min = function min (array) {
  var len = array.length, min = Infinity;
  while (len--) {
    if (array[len] < min) {
      min = array[len];
    } else {
    return 0;
    }
  }
  return min;
};

exports.max = function max (array) {
  var len = array.length, max = -Infinity;
  while (len--) {
    if (array[len] > max) {
      max = array[len];
    } else {
    return 0;
    }
  }
  return max;
};

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.lengh === 0) {  
  let sumArrs;
  for(let i = 0; i < array.lengh; i++) {
    sumArrs += array[i];
  }
  let mean = sumArrs / array.lengh;
  } else {
    return 0;
  }
}

