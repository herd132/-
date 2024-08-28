const input = document.getElementById("name");         //인풋창 가져오기
const btn = document.getElementsByTagName("button");    //버튼 가져오기
const print = document.getElementById("welcomeMessage"); //결과값을 입력할 div 가져오기
btn[0].addEventListener("click", () => {                     
  generateWelcomeMessage();                               //버튼 클릭시 함수 호출
});

function generateWelcomeMessage(){                    //호출된 함수    
    const result = input.value;                      //입력한 내용을 result에 저장
    print.innerText = `안녕하세요 ${result}님! 환영합니다!`;      //result에 저장된 내용을 div에 출력
  };