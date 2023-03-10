const gameContainer = document.getElementById("gameContainer");
const title = document.getElementById("title");

title.innerText = "OMOK";

const map = document.createElement("div");
map.className = "fakeMap";

set

// let win = 0;
// let turn = 1;
// const size = 3;

// setMap();


// function setMap(){
//     for(let i = 0; i<size; i++){
//         for(let j = 0; j<size; j++){
//             const box = document.createElement("div");
    
//             const id = `y${i}x${j}`;
//             box.setAttribute("id",id);
//             box.className = "box";
    
//             map.appendChild(box);
    
//             box.addEventListener("click", e=> {
//                 console.log(id);
//             });
    
//             box.addEventListener("click", e=>{
//                 if(e.target.innerText){
//                     alert("이미 선택되었다!!!");
//                     return;
//                 }

//                 box.innerHTML = turn === 1 ? "O" : "X";

//                 if(box.innerHTML = turn === 1){
//                     box.setAttribute("style", "background-color : white");
//                 } else{
//                     box.setAttribute("style", "background-color : yellow");
//                 }
                
//                 checkHori();

//                 turn = turn === 1 ? 2 : 1;
//             });

//         }
//     }
//     gameContainer.append(map);
// }


// function checkWin(){

//     // 가로
//     win = win === 0 ? checkHori() : win;
//     // 세로
//     // 대각선
//     // 다른대각선

//     if(win != 0){
//         alert(`P${win} WIN!!!!`);
//     }

// }

// function checkHori(){
//     for(let i = 0; i<size; i++){
//         let count = 0;
//         for(let k = 0; k<size; k++){
//             const target = `y${i}x${k}`;
//             const box = map.querySelector(`#${target}`);
//             const text = box.innerText;
//             if(text === (turn === 1 ? "O" : "X")){
//                 count++;
//             }

//             if(count === size){
//                 win = turn;
//             }
//         }
//     }
// }

// function reset(){
//     turn = 1;
//     win = 0;
//     location.reload();
// }