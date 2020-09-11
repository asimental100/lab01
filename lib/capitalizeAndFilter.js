async function capitalizeAndFilter(firstArray) {
  const newArray = [];

  firstArray.forEach(capitalize);

  function capitalize(string) {
    newArray.push(string.toUpperCase());

    return newArray;
  }

  const filteredArray = newArray.filter(word => word.charAt(0) != 'F');

  return filteredArray;
}
  
module.exports = capitalizeAndFilter;
