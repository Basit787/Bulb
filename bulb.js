let bulb = document.getElementById("bulb");
let btn = document.getElementById("btn");

let flag = 0;

btn.addEventListener("click", () => {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    flag = 1;
    btn.innerText = "ON";
    btn.style.backgroundColor = "green";
  } else {
    bulb.style.backgroundColor = "white";
    flag = 0;
    btn.innerText = "OFF";
    btn.style.backgroundColor = "red";
  }
});
