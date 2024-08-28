


const a = document.querySelector(".key-box .key:nth-child(1)");
const s = document.querySelector(".key-box .key:nth-child(2)");
const d = document.querySelector(".key-box .key:nth-child(3)");
const f = document.querySelector(".key-box .key:nth-child(4)");
const g = document.querySelector("html");

g.addEventListener('keydown', function(e){
  if (e.key == "q" || e.key == "Q"){
    a.style.backgroundColor = "red";
  }else if (e.key == "w" || e.key == "W"){
    s.style.backgroundColor = "red";
  }else if (e.key == "e" || e.key == "E"){
    d.style.backgroundColor = "red";
  }else if (e.key == "r" || e.key == "R"){
    f.style.backgroundColor = "red";
  }
})

g.addEventListener('keyup', function(e){
  if (e.key == "q" || e.key == "Q"){
    a.style.backgroundColor = "white";
  }else if (e.key == "w" || e.key == "W"){
    s.style.backgroundColor = "white";
  }else if (e.key == "e" || e.key == "E"){
    d.style.backgroundColor = "white";
  }else if (e.key == "r" || e.key == "R"){
    f.style.backgroundColor = "white";
  }
})