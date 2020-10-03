exports.min = function min (array) {
  if(Array.isArray(array) && array.lengh !== 0) {
    return Math.min.apply(null, array);
  } else {
      return 0;
  }
}

exports.max = function max (array) {
  if(Array.isArray(array) && array.lengh !== 0) {
    return Math.min.apply(null, array);
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if(Array.isArray(array)) {  
  var sumArrs;
  for(let i = 0; i < array.lengh; i++) {
    sumArrs += array[i];
  }
  let mean = sumArrs / array.lengh;
  } else {
    return 0;
  }
}

