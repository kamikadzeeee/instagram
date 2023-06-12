let mini = 0
let min = `${mini}`

let odd = 0
let count = 0;

const randomInteger = (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min;
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let cardIMG = ['виноград.jpeg', "виноград.jpeg","watermelon.jpg","watermelon.jpg","tomat.jpg" ,"tomat.jpg" ,"cucumber.jpg","cucumber.jpg", "баклажан.jpg","баклажан.jpg"]
shuffle(cardIMG)

let number = [0,1,2,3,4,5,6,7,8,9,10]

let need = new Map();

for(let i = 0 ;i < cardIMG.length;i++){
    need.set(number[i + 1],cardIMG[i])    
}
console.log(need)
let comb = new Array;
let combNumber = new Array

const check = (img,n)=>{
    if(odd == 0){
        timer(0)
        odd++;
    }
    if(number[n] == n && number[n] != -1){
        
        if(count == 0){
            img.src = `${need.get(n)}`
        }
        comb.push(need.get(n))
        combNumber.push(n)
        count++
        if(count == 2){
            if(comb[0] != need.get(n)){
                img.src = `${need.get(n)}`
                setTimeout(function() {
                    img.src = "back.jpg";
                  },150)
                document.getElementById(`I${combNumber[0]}`).src = "back.jpg"
                comb = []
                combNumber = []
            }
            else{
                img.src = `${need.get(n)}`
                comb = []
                combNumber = []
                
                let i = cardIMG.indexOf(need.get(n))
                if(i >= 0){
                    cardIMG.splice(i,1)
                }
                i = cardIMG.indexOf(need.get(n))
                if(i >= 0){
                    cardIMG.splice(i,1)
                }
                if(cardIMG.length == 0){
                    document.getElementById("modal").style.display = "block"
                    timer(-1)
                }
            }
            count = 0
        }
    }
   
}

// const check = (img,n) => {
//     if(odd == 0){
//         timer(0)
//     }
//     if(number.length == 1){
//         img.src = number[0]
//     }
//     if(number[n] == n && number[n] != -1){
//         number[n] = -1
//         let random = randomInteger(0,cardIMG.length - 1) 
//         img.src = cardIMG[random]
       
//         cardIMG.splice(cardIMG.indexOf(cardIMG[random]),1)
//         odd++
//         console.log(number)
//     }
    
// }

let a = ""
const timer = (sec) => {
    if(sec == -1){
        console.log(time)
        document.getElementById("time").innerHTML = "<br><br>Ваше время: " + time
        time = "00:00"
        document.getElementById("timer").innerHTML = time
        clearTimeout(a)
    }
    else{
        sec = sec < 10 ? "0"+sec: sec;
        min = parseInt(min) < 10 ? "0" + `${mini}` : `${mini}`;
        if(sec == 59){ 
            mini++;
            sec = 0;
        }
        time = min + ":" + sec
        document.getElementById("timer").innerHTML = time

        a = setTimeout(function(){
            timer(parseInt(sec) + 1);
        },1000)
    }
}