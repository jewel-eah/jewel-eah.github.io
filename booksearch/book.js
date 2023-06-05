

let page = 1;
let size = 20;

const query = document.querySelector(".query");
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("submit", e =>{
    e.preventDefault();
    if(query !== "") {
        page = 1;
        searchRequest(query.value, page);
        query.value = "";
    }
})

function searchRequest(query, page) {
    $.ajax({
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=${size}&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 0e90a499b95b3e020575266984575f8c"
        },
    })
    .done((response) => {

        console.log(response);
        const container = document.querySelector(".container");
        container.innerText = ""; 
        let result = response.documents;
        for(let i=0; i<result.length; i++) {
            if(result[i].thumbnail !== ""){
                const resultCard = document.createElement("div");
                resultCard.setAttribute("class", "result-card");
        
                const bookImg = document.createElement("img");
                bookImg.setAttribute("class", "book-img");
                bookImg.src = result[i].thumbnail;
                bookImg.addEventListener("click", e =>{
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
                const publisher = document.createElement("span");
                publisher.setAttribute("class", "publisher");
    
                author.innerText = result[i].authors+" ";
                publisher.innerText = "| "+result[i].publisher;
    
                bookInfo.appendChild(author);
                bookInfo.appendChild(publisher);
                
                container.appendChild(resultCard);
            }
        }
        console.log(page);

        const pageMove = document.querySelector(".move-page");
        pageMove.innerText = "";

        const backBtn = document.createElement("img");
        
        if(page > 1) {
            backBtn.setAttribute("class", "backBtn");
            backBtn.setAttribute("src",`https://em-content.zobj.net/thumbs/160/microsoft/54/leftwards-black-arrow_2b05.png`);

            backBtn.addEventListener("click", e =>{
                page --;
                searchRequest(query, page);
            })
        }

        pageMove.append(backBtn);

        pageMove.append(`${page} / ${Math.ceil(response.meta.pageable_count/size)}`);

        const nextBtn = document.createElement("img");
        
        if(response.meta.is_end === false) {
            nextBtn.setAttribute("class", "nextBtn");
            nextBtn.setAttribute("src",`https://em-content.zobj.net/thumbs/160/microsoft/54/black-rightwards-arrow_27a1.png`);

            nextBtn.addEventListener("click", e =>{
                page ++;
                searchRequest(query, page);
            })
        }

        pageMove.append(nextBtn);

    });
}