const myInput = document.getElementById("myInput")
const myResult = document.getElementById("myResult")
const myButton = document.getElementById("myButton")

let myRandomNum = 0

function mySubmit(){

  myRandomNum =myInput.value;

  if(myRandomNum = 0){
    myResult.textContent = `You are too young to drive ,you were just born`;
  }
    else if(myRandomNum < 0){
      myResult.textContent = `You can not be below zero`;
    }
    else if(myRandomNum <=18){ 
      myResult.textContent = `You are old enough to drive`;
    }
    else if(myRandomNum >= 18){
      myResult.textContent =`You are too young to drive`;
    }
    else if(myRandomNum > 100){
      myResult.textContent = `You are too Old to drive`;
    }
    else{
      `You must be 18+ to be able to drive`;
    }
}
