@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');


* {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
}

h1 {
    text-align: center;
    margin: 20px 0 20px 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color:floralwhite;
    width: 1200px;
    margin: 40px auto 40px auto;
}

.search-box {
    width:  fit-content;
    margin: auto;
}

.result-card {
    margin: 5px 20px 5px 20px;
    width: 180px;
    height: 270px;
    text-align: center;
    border: solid 1px;
    background-color: whitesmoke;
    overflow: hidden;
}

.book-title {
    height: 45px;
    margin: 0 10px 0 10px;
    overflow: hidden;
}

.book-img{
    width: 120px;
    height: 174px;
    margin-top: 6px;
}

.book-img:hover {
    cursor: pointer;
}

.price {
    font-size: medium;
    color: green;
}
.zero {
    font-size: small;
    color: red;
}

.book-info {
    font-size: x-small;
}

.move-page {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 40px auto 40px auto;
}

.move-page>img {
    background-color: white;
    width: 30px;
}

.backBtn:hover,.nextBtn:hover {
    background-color: darkgray;
    cursor: pointer;
}

.query {
    width: 200px;
    height: 25px;
}

.search-btn {
    width: 30px;
    height: 25px;
    background-image: url("https://em-content.zobj.net/thumbs/160/microsoft/54/left-pointing-magnifying-glass_1f50d.png");
    background-color: white;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
}

.search-btn:hover {
    background-color: darkgray;
}