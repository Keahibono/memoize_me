document.addEventListener('click', memoize());

function memoize(){
  var cache = {};

  return function(x){
    //console.log(x.srcElement);
    if(x.srcElement.id){
      var target = x.srcElement.id;
    } else if (x.srcElement.className){
       var target = x.srcElement.className;
    }

    if(target in cache){
      console.log( target + " in cache");
      return cache[target];
    } else {
      console.log(target + " not in cache");
      cache[target] = target;
      return cache[target];
    }
  };

}