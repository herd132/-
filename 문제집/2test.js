let num = [1, 2, 3, 4, 5];                        // 배열 가져오기
const ulTag = document.getElementById("ulTag");   // 결과값을 표기할 ulTag 가져오기
for (let i = 0; i < num.length; i++){             // 반복문을 사용하여 각 배열의 값을 *2 한뒤
  num[i] *= 2;                                    // 해당 배열에 다시 저장하고 
  const li = document.createElement("li");        // li 태그를 생성하여
  li.innerText = num[i];                          // <li>num[i]</li> 를 ulTag의 자식요소로 추가
  ulTag.append(li);
};

