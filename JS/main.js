// var btn = document.getElementById("btn")
// var colorinput = document.getElementById("colorinput")
// var rangeinput = document.getElementById("rangeinput")
// var numberinput = document.getElementById("numberinput")
var tshirtcolorinput = document.getElementById("tshirtcolorinput")
var textinput = document.getElementById("textinput")
var textcolorinput = document.getElementById("textcolorinput")

var mydiv = document.getElementById("mydiv")
var tshirt = document.getElementById("tshirt")
var mytext = document.getElementById("mytext")

var font1 = document.getElementById("font1")
var font2 = document.getElementById("font2")
var font3 = document.getElementById("font3")
var font4 = document.getElementById("font4")
var font5 = document.getElementById("font5")
var font6 = document.getElementById("font6")


// btn.addEventListener("click", ()=>{
//     let color = colorinput.value 
//     mydiv.style.background = (color)
// })

// colorinput.addEventListener("change", ()=>{
//     let color = colorinput.value
//     mydiv.style.background = (color)
// })

// rangeinput.addEventListener("change", ()=>{
//     let divwidth = rangeinput.value
//     mydiv.style.width = divwidth + "%"
// })

// numberinput.addEventListener("change", ()=>{
//     let divheight =numberinput.value
//     mydiv.style.height = divheight + "px"
// })

tshirtcolorinput.addEventListener("change", ()=>{
    let tshirtcolor = tshirtcolorinput.value
    tshirt.style.color = (tshirtcolor)
})

textinput.addEventListener("keyup", ()=>{
    mytext.innerHTML = textinput.value
})

textcolorinput.addEventListener("change", ()=>{
    let newtextcolor = textcolorinput.value
    mytext.style.color = (newtextcolor)
})

font1.addEventListener("click", ()=>{
    mytext.classList.add("font1")
    mytext.classList.remove("font2", "font3", "font4", "font5", "font6")
    

 })
font2.addEventListener("click", ()=>{
    mytext.classList.add("font2")
    mytext.classList.remove("font1", "font3", "font4", "font5", "font6")
 })
font3.addEventListener("click", ()=>{
    mytext.classList.add("font3")
    mytext.classList.remove("font1", "font2", "font4", "font5", "font6")
 })
font4.addEventListener("click", ()=>{
    mytext.classList.add("font4")
    mytext.classList.remove("font1", "font3", "font2", "font5", "font6")
 })
font5.addEventListener("click", ()=>{
    mytext.classList.add("font5")
    mytext.classList.remove("font1", "font3", "font4", "font2", "font6")
 })
font6.addEventListener("click", ()=>{
    mytext.classList.add("font6")
    mytext.classList.remove("font1", "font3", "font4", "font5", "font2")
 })
