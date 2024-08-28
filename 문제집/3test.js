const tag = document.getElementById("tagName"); //tagName 인풋창 가져오기
const text = document.getElementById("tagInnerText"); //tagInnerText 인풋창 가져오기
const color = document.getElementById("colorName"); //colorName 인풋창 가져오기
const result = document.getElementById("result"); // 결과값을 출력하기 위한 변수
const btn = document.getElementById("btn"); //버튼 가져오기

btn.addEventListener("click", () => {                       //버튼클릭시 함수 실행
  const create = document.createElement(tag.value);   // tag인풋창에 입력한 태그 생성<tag.value></tag.value> 후 creat에 저장
  create.innerText = text.value;                     // 생성된 태그에 text인풋창에 입력된 내용 넣기
  create.style.color = color.value;                 // 입력된 내용의 글씨색을 color인풋창에 입력한 색상으로 변경
  result.append(create);                           //결과값 출력
});