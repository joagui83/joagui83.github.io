alert("Locate the treasure!")

var treasure = Math.floor(Math.random()*5)
var bomb = Math.floor(Math.random()*5)
const treasureFinder = (id) => {
    console.log("id:",id)
    if (treasure === id){
        alert("Congratulations! You Won!")
    document.getElementById(id).innerHTML = "&#x1f308"
    document.getElementById("table").style.pointerEvents="none"
} else  if (bomb === id){
    alert("Sorry try again")
  document.getElementById(id).innerHTML = "&#x2620"
  document.getElementById("table").style.pointerEvents="none"
} else {
    alert("Keep looking")
    document.getElementById(id).innerHTML = "&#x1f332"
}
}
// treasureFinder()
//  console.log()
