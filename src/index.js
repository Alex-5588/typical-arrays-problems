exports.min = function min (array) {
  if(Array.isArray(array) && array.lengh !== 0) {
    return Math.min.apply(null, array);
  } else {
      return 0;
  }
};

exports.max = function max (array) {
  if(Array.isArray(array) && array.lengh !== 0) {
    return Math.min.apply(null, array);
  } else {
    return 0;
  }
};

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.lengh === 0) {  
  var sumArrs;
  for(let i = 0; i < array.lengh; i++) {
    sumArrs += array[i];
  }
  var mean = sumArrs / array.lengh;
      return mean;
  } else {
    return 0;
  }
};
