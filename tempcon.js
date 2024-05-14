function convert_fah(){
    var cle_input = Number(document.getElementById("cel-input").value)
      var fahren= cle_input*9/5+32
      var result =document.getElementById("fah-result").innerHTML =`<h2>${fahren.toFixed(2)} F</h2>`
}

function convert_cel(){
   var far_ip= Number( document.getElementById("fah-input").value)
   var celcius =(far_ip-32)*5/9
    var result= document.getElementById("cle-result").innerHTML =`<h2>${celcius.toFixed(2)} C </h2>`
}