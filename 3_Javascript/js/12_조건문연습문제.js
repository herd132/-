
function discrimination() {
  let a = 5;
  let b = 10

  if(a > b) {
  alert('a가 큽니다');
}else{
  alert('b가 큽니다');
 }
}

//

const inputcase1 = document.getElementById("inputcase1");
function case1() {
  const case2 = Number(inputcase1.value);
  if(case2 % 2==1){
    result = "홀수입니다";
}else{
    result = "짝수입니다";
}
 calcResult1.innerText = result;
}

//

function check(){
let x = 15;
let y = 22;
let z = 9;

  if( x > y ){
    if( x > z ){
      result = "가장 큰 수는 x입니다";
    }else{
      result = "가장 큰 수는 z입니다";
    }
  }else if( y > x){
    if( y > z){
      result = "가장 큰 수는 y입니다";
    }else{
      result = "가장 큰 수는 z입니다";
    }
  }
  print1.innerText = result;
}
  


//

const inputcase4 = document.getElementById("inputcase4");

function check4(){
  const check5 = (inputcase4.value);
  if(check5 == "banana"){

    result = "banana입니다"
  }else if(check5 == "apple"){

    result = "apple입니다"
  }else{
    result = "banana도 apple도 아닙니다"
  }
  
  print2.innerText = result;
}

//

const score = document.getElementById("score");
const scoreCalc = document.getElementById("scoreCalc")
function check5(){
  const grade = Number(score.value);
  if(grade > 90){
    result = "A";
  }else if(grade >= 81){
    result = "B";
  }else if(grade >= 71){
    result = "C";
  }else if(grade >= 61){
    result = "D";
  }else{
    result = "F";
  }

  scoreCalc.innerText = result;
}


//


const age = document.getElementById("age");
const tall = document.getElementById("tall");

function qualifications(){
  const old = Number(age.value);
  const key = Number(tall.value);

  if( old < 0 || old > 100){
    result = "잘못 입력 하셨습니다.";
  }else if( key >= 140 && old >= 12){
    result = "탑승 가능";
  }else if( old < 12){
    result = "적정 연령이 아닙니다";
  }else if( key < 140 ){
    result = "적정 키가 아닙니다";
  }
  

  result6.innerText = result;
}


const month = document.getElementById("month");
const season = document.getElementById("season");
document.getElementById('summer').disabled = true;

document.getElementById('winter').disabled = true;

function check7(){
  const months = Number(month.value);
  if( months == 3 || months == 4 || months == 5 ){
    results = "봄";
  }else if( months == 6 || months == 7 || months == 8){
    results = "여름";
    document.getElementById('summer').disabled = false;
  }else if( months == 9 || months == 10 || months == 11 ){
    results = "가을";
  }else if( months == 12 || months == 1 || months == 2){
    results = "겨울";
    document.getElementById('winter').disabled = false;
  }
}

