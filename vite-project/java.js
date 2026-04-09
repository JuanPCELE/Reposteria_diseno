const track = document.querySelector(".carousel-track")
const images = document.querySelectorAll(".carousel-track img")

let index = 0

document.querySelector(".next").addEventListener("click", () => {

index++

if(index >= images.length){
index = 0
}

track.style.transform = `translateX(-${index * 100}%)`

})

document.querySelector(".prev").addEventListener("click", () => {

index--

if(index < 0){
index = images.length - 1
}

track.style.transform = `translateX(-${index * 100}%)`

}) 