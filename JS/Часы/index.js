let date = new Date()

let session = "AM"
h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

let time = h + ":" + m + ":" + s + " "+ session
document.getElementById("time").innerHTML = time 
location.reload();