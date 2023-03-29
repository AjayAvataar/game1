function arr(mn, mx) {
  function range(min, max) {
    var len = max - min + 1;
    len *= 2;
    var arr = new Array(len);
    for (var i=0; i<len; i++) {
      arr[i] = min + (i / 2);
      arr[i + 1] = min + (i / 2);
      i++;
    }
    return arr;
  }
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

// Used like so
  var arr = range(mn, mx);
  shuffle(arr);

  return arr;

}

export default arr;