// let object = document.getElementById("js");
// object.onclick = function(){myScript};
// object.style.color = "blue"

let screen = document.getElementById("display");

let keys = document.getElementsByClassName("btn");
// console.log(keys)
// keys.style.backgroundColor="blue"

function calc(key) {
  console.log(key)
  screen.value += key
}

function equal() {
  let result = eval(display.value)
  display.value = result;
}
function reset() {
  display.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1)
}

var buttons = document.getElementsByClassName("toggle");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = " hsl(222, 26%, 31%)";
      document.getElementsByClassName("keys")[0].style.backgroundColor = " hsl(224, 36%, 15%)";
      document.getElementById("display").style.backgroundColor = "hsl(224, 36%, 15%)"
      screen.style.color = "white"
      document.getElementsByClassName("header")[0].style.color = "white"
      document.getElementsByClassName("delete")[0].style.backgroundColor = "hsl(225, 21%, 49%)"
      document.getElementsByClassName("reset")[0].style.backgroundColor = "hsl(225, 21%, 49%)"
      document.getElementsByClassName("equal")[0].style.backgroundColor="hsl(6, 63%, 50%)"
      document.getElementsByClassName("tri-state-toggle")[0].style.backgroundColor=" hsl(224, 36%, 15%)"
      document.getElementsByClassName("toggle")[0].style.backgroundColor="hsl(6, 63%, 50%)"
      for(let i = 0; i < keys.length; i++){
        keys[i].style.color="hsl(221, 14%, 31%)"
      
      }

    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "Lightgray";
      document.getElementsByClassName("keys")[0].style.backgroundColor = " hsl(0, 5%, 81%)"
      document.getElementById("display").style.backgroundColor = "hsl(0, 0%, 93%)";
      screen.style.color = "hsl(60, 10%, 19%)"
      document.getElementsByClassName("header")[0].style.color = "hsl(60, 10%, 19%)"
      document.getElementsByClassName("delete")[0].style.backgroundColor = " hsl(185, 42%, 37%)"
      document.getElementsByClassName("reset")[0].style.backgroundColor = " hsl(185, 42%, 37%)"
      document.getElementsByClassName("equal")[0].style.backgroundColor=" hsl(25, 98%, 40%)"
      document.getElementsByClassName("tri-state-toggle")[0].style.backgroundColor="hsl(0, 5%, 81%)"
      document.getElementsByClassName("toggle")[1].style.backgroundColor="hsl(25, 98%, 40%)"
      for(let i = 0; i < keys.length; i++){
        keys[i].style.color="hsl(60, 10%, 19%)"
        keys[i].style.backgroundColor = " lightgray"
      }

    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      document.getElementsByClassName("keys")[0].style.backgroundColor =" hsl(268, 71%, 12%)";
      document.getElementById("display").style.backgroundColor = "hsl(268, 71%, 12%)";
      screen.style.color = " hsl(52, 100%, 62%)"
      document.getElementsByClassName("header")[0].style.color = "hsl(52, 100%, 62%)"
      document.getElementsByClassName("delete")[0].style.backgroundColor = " hsl(281, 89%, 26%)"
      document.getElementsByClassName("reset")[0].style.backgroundColor = " hsl(281, 89%, 26%)"
      document.getElementsByClassName("equal")[0].style.backgroundColor="hsl(177, 92%, 70%)"
      document.getElementsByClassName("tri-state-toggle")[0].style.backgroundColor="hsl(268, 71%, 12%)"
      document.getElementsByClassName("toggle")[2].style.backgroundColor=" hsl(176, 100%, 44%)"
      for(let i = 0; i < keys.length; i++){
       keys[i].style.color="hsl(52, 100%, 62%)"
        keys[i].style.backgroundColor = "hsl(268, 47%, 21%)"
      }




    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});