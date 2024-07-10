let light = document.querySelector("#light")

let onButton = document.querySelector("#onButton")
let offButton = document.querySelector("#offButton")







onButton.addEventListener("click" , function(){
    light.style.backgroundColor="yellow"
    onButton.style.backgroundColor= "red"
    offButton.style.backgroundColor= ""
})


offButton.addEventListener("click" , function(){
    light.style.backgroundColor= "white"
    offButton.style.backgroundColor= "red"
    onButton.style.backgroundColor= ""

})