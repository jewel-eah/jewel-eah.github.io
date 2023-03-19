
let page = 1;
let size = 20;
const query = document.querySelector(".query");
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener("submit", (e) => {
    e.preventDefault(); // 기본동작 방지
    if(query !== ""){
        page = 1;
        searchRequest(query.value, page);
        query.value = "";
    }
});


function searchRequest(query, page) {
    console.log("query : " ,query);
    $.ajax({
        "url": `http://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=${size}&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
        "Authorization": "KakaoAK d14e3534986c7b2f9c0cdbb7c2bc506c"
        },
    })
    
    .done((response) => {
        console.log(response);
        const container = document.querySelector(".container");
        container.innerText = "";
        let result = response.documents;
        
        for(let i=0; i<result.length; i++){
            if(result[i].thumbnail != ""){
                const resultCard = document.createElement("div");
                resultCard.setAttribute("class", "result-card");

                const bookImg = document.createElement("img");
                bookImg.src = result[i].thumbnail;
                bookImg.addEventListener("click", e=>{
                    location.href = result[i].url;
                })
                resultCard.appendChild(bookImg);

                const bookTitle = document.createElement("h4");
                bookTitle.setAttribute("class", "book-title");
                bookTitle.innerText = result[i].title;
                resultCard.appendChild(bookTitle);

                const price = document.createElement("span");

                if(result[i].sale_price > 0){
                    price.setAttribute("class", "price");
                    price.innerText = result[i].sale_price + "원";
                }
                else{
                 price.setAttribute("class", "zero");
                 price.innerText = "절판";  
                }

                resultCard.appendChild(price);

                const bookInfo = document.createElement("p");
                bookInfo.setAttribute("class", "book-info");

                resultCard.appendChild(bookInfo);

                const author = document.createElement("span");
                author.setAttribute("class", "author");
                author.innerText = result[i].authors+" ";
                const publisher = document.createElement("sapn");
                publisher.setAttribute("class", "publisher");
                publisher.innertext = "⏐ "+result[i].publisher;

                bookInfo.appendChild(author);
                bookInfo.appendChild(publisher);

                container.appendChild(resultCard);
            }
        }

// 페이지이동 
        const pageButton = document.querySelector(".page-button");
        pageButton.innerText = "";

        const backBtn = document.createElement("img");

        if(page > 1){
            backBtn.setAttribute("class", "backBtn");
            backBtn.setAttribute("src", "https://em-content.zobj.net/thumbs/240/emojidex/112/back-with-leftwards-arrow-above_1f519.png");

            backBtn.addEventListener("click", e=>{
                page --;
                searchRequest(query, page);
            })
        }

        pageButton.append(backBtn);

        pageButton.append(`${page} / ${Math.ceil(response.meta.pageable_count/size)}`);

        const nextBtn = document.createElement("img");

        if(response.meta.is_end == false){
            nextBtn.setAttribute("class", "nextBtn");
            nextBtn.setAttribute("src", "https://em-content.zobj.net/thumbs/240/whatsapp/326/soon-arrow_1f51c.png");

            nextBtn.addEventListener("click", e=>{
                page ++;
                searchRequest(query, page);
            })
        }

        pageButton.append(nextBtn);

    });
}


// ajax
// ㄴ 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술을 의미한다.
// fetch() 로도 구현이 가능 함 (일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용