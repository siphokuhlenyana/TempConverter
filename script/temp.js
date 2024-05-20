let celcius =document.getElementsByTagName('input')[0]
let fahrenheit =document.getElementsByTagName('input')[1]
let kelvin =document.getElementsByTagName('input')[2]
let button=document.getElementsByTagName('button')[0]

button.addEventListener('click',()=>{
    convertToFahrenheit()
    convertToKelvin()

})

function convertToFahrenheit(){
    fahrenheit.value=(parseFloat(celcius.value)*9) /5
}

function convertToKelvin(){
kelvin.value=(parseFloat(celcius.value)+ 273.15)
}