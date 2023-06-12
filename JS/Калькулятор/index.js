// clear = document.getElementById("clear")
// brackets = document.getElementById("brackets")
// percent = document.getElementById("percent")
// change = document.getElementById("change")

// divide = document.getElementById("divide")
// multiply = document.getElementById("multiply")
// minus = document.getElementById("minus")
// plus = document.getElementById("plus")

// nine = document.getElementById("nine")
// eight = document.getElementById("eight")
// seven = document.getElementById("seven")

// six = document.getElementById("six")
// five = document.getElementById("five")
// four = document.getElementById("four")

// three = document.getElementById("three")
// two = document.getElementById("two")
// one = document.getElementById("one")

// zero = document.getElementById("zero")

numberStr = {
    'zero': 0, 'one': 1,
    'two': 2, 'three': 3,
    'four': 4, 'five': 5,
    'six': 6, 'seven': 7,
    'eight': 8, 'nine': 9,
    'point': '.', 'plus': "+",
    'minus': '-', 'divide': "/",
    'multiply': '*', 'equal': "=",
    'clear': 'cl', 'change': 'ch',
    'percent': 'pr'
}

let str = ""
const numberS = (n) => {
    if (numberStr[n] == "cl") {
        str = ""
        document.getElementById('sss').innerHTML = `<p class="go">0</p>`
        return 0;
    }
    if (!isNaN(numberStr[n])) {
        str += numberStr[n]
        document.getElementById('sss').innerHTML = `<p class="go">${str}</p>`
    }
    else if (numberStr[n] != "=" &&
        numberStr[n] != "ch" && numberStr[n] != 'pr') {
        str += numberStr[n]
        document.getElementById('sss').innerHTML = `<p class="go">${str}</p>`
    }
    if(numberStr[n]=="pr"&&str!=""){
        str=eval(str+"/100")
        document.getElementById('sss').innerHTML = `<p class="go">${str}</p>`
    }
    if (numberStr[n] == "ch" && str != "") {
        str = eval(parseFloat(str) *(-1))
        document.getElementById('sss').innerHTML = `<p class="go">${str}</p>`
    }
    if (numberStr[n] == "=" && str != "") {
        //alert(eval(str))
        document.getElementById('sss').innerHTML = `<p class="go">${eval(str)}</p>`
        str = `${eval(str)}`
    }

}


