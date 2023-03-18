// 게임컨테이너 생성 
const gameContainer = document.getElementById("gameContainer");
const title = document.getElementById("title");

title.innerText = "OMOK GAME";

// 컨테이너 내 맵 생성 
const map = document.createElement("div");
map.className = "map";
const fakeMap= document.createElement("div");
fakeMap.className = "fakeMap";

let turn = 1;
let size = 10;
let win = 0;

setGrid();
function setGrid(){
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            const gridBox = document.createElement("div");

            const id = `y${i}x${j}`;
            gridBox.setAttribute("id", id);
            gridBox.className = "gridBox";
            fakeMap.append(gridBox);
        }
    }
}

// 맵을위한 10x10 박스 생성 
setMap();
function setMap(){
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            const box = document.createElement("div");

            const id = `y${i}x${j}`;
            box.setAttribute("id", id);
            box.className = "box";
            map.append(box);
            map.append(fakeMap);

            box.addEventListener("click", e =>{
                console.log(id);
                
                if(box.innerText === ""){
                    box.innerText = turn == 1 ? "⚫️" : "⚪️";
                }
                else {
                    alert(`이미 선택된 자리입니다. `);
                    return;
                }

                // 승리확인 
                checkWin();
                turn = turn === 1 ? 2 : 1 ;
            })  
            
        
        }
    }
    gameContainer.append(fakeMap);
    gameContainer.append(map);
}

// 승리체크 및 위너 출력 
function checkWin(){
    checkHori();
    checkVeri();
    checkDiag();
    checkReverse();

    if(win != 0){
        if(win === 1){
            alert(`P${win} BLACK WIN !!`);
        }
        else if(win === 2){
            alert(`P${win} WHITE WIN !!`);
        }
    }
}

// 오목 가로확인 
function checkHori(){
    for(let i=0; i<size; i++){
        let count = 0;
        for(let j=0; j<size; j++){
            const target = `y${i}x${j}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            if(text === (turn == 1 ? "⚫️" : "⚪️")) {
                console.log(count);
                count ++;
            }
            else{
                count = 0;
            }

            if(count === 5){
                win = turn;
            }
        }
    }
}

// 오목 세로확인 
function checkVeri(){
    for(let i=0; i<size; i++){
        let count = 0;
        for(let j=0; j<size; j++){
            const target = `y${j}x${i}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            if(text === (turn == 1 ? "⚫️" : "⚪️")){
                count ++;
            }

            else{
                count = 0;
            }

            if(count === 5){
                win = turn;
            }
        }
    }
}

// 오목 / 확인 
function checkDiag(){
    for(let i=4; i<size; i++){
        for(let j=0; j<size-4; j++){
            const target = `y${i}x${j}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            let count = 0;
            if(text === (turn == 1 ? "⚫️" : "⚪️")){
               for(let k=0; k<5; k++){
                const target2 = `y${i-k}x${j+k}`;
                const box = map.querySelector(`#${target2}`);
                const text2 = box.innerText;
                if(text2 === (turn == 1 ? "⚫️" : "⚪️")){
                    count ++;
                }
               }
            }
            if(count === 5){
                win = turn;
            }
        }
    }
}

// \
function checkReverse(){
    for(let i=0; i<size-4; i++){
        for(let j=0; j<size-4; j++){
        const target = `y${i}x${j}`;
        const box = map.querySelector(`#${target}`);
        const text = box.innerText;
        let count = 0;
        if(text === (turn == 1 ? "⚫️" : "⚪️")){
              for(let k=0; k<5; k++){
                 const target2 = `y${i+k}x${j+k}`;
                 const box = map.querySelector(`#${target2}`);
                 const text2 = box.innerText;
                if(text2 === (turn == 1 ? "⚫️" : "⚪️")){
                    count ++;
                  }
             }
        }
        if(count === 5){
            win = turn;
        }
        }
    }
}

function gameOver(){
    if(win != 0){
        box.addEventListener("click", e =>{
            alert(`게임종료되었습니다.`);
            return;
        })
    };
}

function reload(){
    turn = 1;
    win = 0;
    location.reload();
}