var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars) {
  var array = [chocolateBars];
  chocolateBars = ['foo', ...chocolateBars];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars) {
  chocolateBars.unshift('foo');
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars) {
  var array = [chocolateBars];
  chocolateBars = [...chocolateBars, 'foo'];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars) {
  chocolateBars.push('foo');
  return chocolateBars;
}

function accessElementInArray() {
  var array = [1, 2, 3];
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var array = [1, 2, 3];
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray() {
  var array = [1, 2, 3];
  var finalArray = array;
  finalArray.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray() {
  var array = [1, 2, 3];
  array.pop();
  return array;
}

function removeElementFromEndOfArray() {
  var array = [1, 2, 3];
  var finalArray = array;
  finalArray.pop();
  return finalArray;
}