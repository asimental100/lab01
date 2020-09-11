async function copyAndPush(array, pushItem) {
  const pushArray = pushItem;
  const newArray = array.concat(pushArray);
  
  return newArray;
}

module.exports = copyAndPush;
