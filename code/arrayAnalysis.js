const analyze = (array) => {
  const average = () => {
    const accumulate = (total, currentValue) => {
      return total + currentValue;
    };
    return array.reduce(accumulate) / array.length;
  };
  const findMin = () => {
    const smallToLarge = (a, b) => {
      return a - b;
    };
    array.sort(smallToLarge);
    return array[0];
  };
  const findMax = () => {
    const largeToSmall = (a, b) => {
      return a + b;
    };
    array.sort(largeToSmall).reverse();
    return array[0];
  };
  return {
    average: average(),
    min: findMin(),
    max: findMax(),
    length: array.length,
  };
};

export default analyze;
