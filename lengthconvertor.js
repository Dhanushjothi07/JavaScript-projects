function convert(){
var input_val = Number(document.getElementById("input").value)
var inche_val=input_val/2.54
var result = document.getElementById("inches").innerHTML = `<h2>${inche_val}"inches"</h2>`
 
}

function alternate(){
    var inputinch= Number(document.getElementById("input-inch").value)
    var centi_val =inputinch*2.54
    var result = document.getElementById("centimeter").innerHTML =`<h2>${centi_val}"cm"</h2>`
}