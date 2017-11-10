var myselector = "div";

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var collection = document.querySelectorAll('#nested');
  for (i = 0; i < collection; i++){
    if(collection[i].className == 'target'){
      return collection[i];
    }
  } //return document.querySelector('div.nested div div div div.target');
}

function deepestChild(){

}

function increaseRankBy(n) {

}

// var check = nestedTarget();
// console.log(check);
