// API : Application Programming Interface
//  ㄴ open API : 다양한 기업에서 공익을 목적 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
//  ㄴ private API : 유료

// Open API
// ㄴ 공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터

// $. = jQuery의 약자

let page = 1;
const query = document.querySelector(".query");

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener("submit", (e) => {
    e.preventDefault(); // 기본동작 방지
    if(query !== ""){
        page = 1;
        searchRequest(query.value, page);
    }
});


function searchRequest(query, page) {
    console.log("query : " ,query);
    $.ajax({
        "url": `http://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=10&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
        "Authorization": "KakaoAK d14e3534986c7b2f9c0cdbb7c2bc506c"
        },
    }).done(function (response) {
        const container = document.querySelector("#container");
       
        response.documents.forEach((book) => {
          const title = book.title;
          const price = book.price;
          const publisher = book.publisher;
          const author = book.authors[0]; // 저자가 여러명일 경우 첫번째 저자만 사용
          const thumbnail = book.thumbnail;
    
          // 검색 결과를 표시할 카드 생성
          const card = document.createElement("div");
          card.className = "result-card";
    
          // 책 썸네일 이미지 추가
          const bookImg = document.createElement("img");
          bookImg.className = "book-img";
          bookImg.src = thumbnail;
          card.appendChild(bookImg);
    
          // 책 제목 추가
          const bookTitle = document.createElement("h4");
          bookTitle.className = "book-title";
          bookTitle.textContent = title;
          card.appendChild(bookTitle);
    
          // 책 상세 정보 추가
          const bookDescription = document.createElement("p");
          bookDescription.className = "book-description";
          bookDescription.textContent = `${author} | ${publisher}`;
          card.appendChild(bookDescription);
    
          // 책 가격 추가
          const bookPrice = document.createElement("span");
          bookPrice.className = "book-price";
          bookPrice.textContent = price.toLocaleString() + "원";
          card.appendChild(bookPrice);
    
          container.appendChild(card); // 검색 결과 카드 추가
        });

        // if(response.meta.is_end === false){
        //     container.innerHTML = ""; // 검색 결과 이전 내용 초기화
        // }

      });
}


// ajax
// ㄴ 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술을 의미한다.
// fetch() 로도 구현이 가능 함 (일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용