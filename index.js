var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var copy2 = Object.assign({}, object)
  delete copy2[key];
  return copy2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
