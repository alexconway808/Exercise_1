
window.onload = function(){

  var thousand = []; //this loop creates an array of 1 to 10000
  for (var i = 1; i < 1000; i++){
      thousand.push(i);  
      shuffle(thousand);
      console.log(thousand);
  };

}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {

    // Pick a remaining element
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}



  // var random = thousand[Math.floor(Math.random() * thousand.length)];
  //     console.log(random);
  // var scramble = function(){
  //   return Math.floor(Math.random() * 1000);
  // };
  //   console.log(scramble());
