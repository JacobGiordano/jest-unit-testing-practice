const arrayReducer = (previousValue, currentValue) => previousValue + currentValue;

const arrayAnalysis = array => {
  const object = {
    average: array.reduce(arrayReducer) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  };
  console.log(object);
  return object;
}

export default arrayAnalysis;