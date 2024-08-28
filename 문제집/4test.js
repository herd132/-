const number = document.querySelector("#numberInput");            // 입력값 가져오기


document.querySelector("#btn").addEventListener("click", () => {  //버튼 클릭시 함수 호출
    const value = Number(number.value);                           //인풋창에 입력한 값을 숫자로 변환하여 value에 저장
    setTimeout( function(){if(value == 0){                        //setTimeout() == 딜레이 설정 
      alert("0 입니다");                                           //if 문을 사용하여 0일때 짝수일때,홀수일때 조건에 맞춰 출력

    } else if(value % 2 == 0){                                    // value % 2 == 2로 나눠 나머지가 0이므로 짝수
      alert("짝수입니다")

    } else if(value % 2 == 1){                                    // value % 1 == 2로 나눠 나머지가 1이므로 홀수
      alert("홀수입니다");
    }}, 3000);                                                    // 1000당 1초
});