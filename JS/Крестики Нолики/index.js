let firstPlayer = ""
let secondPlayer = ""
let modal = document.getElementById("modal")
let modal2 = document.getElementById("modal2")
let modal3 = document.getElementById("modal3")
let start = document.getElementById("start")
let chooseXO = document.getElementsByName("choose")

const choose = () => {
    modal.style.display = "block"
}
start.onclick = function () {
    for (var i = 0; i < chooseXO.length; i++) {
        if (chooseXO[i].checked) {
            if (chooseXO[i].value == "O") {
                firstPlayer = "O"
                secondPlayer = "X"
            }
            else {
                firstPlayer = "X"
                secondPlayer = "O"
            }
        }
    }
    modal.style.display = "none"
}
let count = 0

let si = 0

let odd = 1

let firstPlayerMoves = ""
let secondPlayerMoves = ""

let number = new Array()

let nU = [0,1,2,3,4,5,6,7,8,9]


const check = (img, n) => {
    if(si < 10){
        number[count] = n
        count++;
        if(number.length == 10){
            si++;
        }
        if(nU[n] == n)
        {
            nU[n] = -1
            addMoves(count,firstPlayer,secondPlayer,img,n)
            si++;
            checkWin(firstPlayerMoves,secondPlayerMoves)
        }
        else{
            number.splice(number.length - 1,1)
            count--
        }
    }
}
const checkWin = (f,s) => {
    let win = ['123','132','213','231','321','312',
                '147','174','417','471','714','741',
                '159','195','519','591','915','951',
                '258','285','528','582','825','852',
                '357','375','537','573','735','753',
                '369','396','639','693','936','963',
                '456','465','546','564','645','654',
                '759','579','795','597','975','957']
    for(let i = 0 ; i<win.length;i++){
        let indexF = String(f).indexOf(win[i])
        let indexS = String(s).indexOf(win[i])
        if(indexF !== -1){
            modal2.style.display = "block";
        }
        if(indexS !== -1){
            modal3.style.display = "block"
        }
    }
}
const addMoves = (count , firstPlayer , secondPlayer ,img,n) =>{
        if (count % 2 == 1) {
            if (firstPlayer == "X") {
                img.src = "x.png"
            }
            else if (firstPlayer == "O") {
                img.src = "o.png"
            }
            firstPlayerMoves += String(n) 
            console.log(firstPlayerMoves)
        }
        else {
            if (secondPlayer == "X") {
                img.src = "x.png"
            }
            else if (secondPlayer == "O") {
                img.src = "o.png"
            }
    
            secondPlayerMoves += String(n) 
        }
}

