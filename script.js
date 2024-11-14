let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
const images = document.querySelectorAll(".header-slider ul img")

var n =0;
function changenext(){
    for (let i = 0; i<images.length; i++) {
      images[i].style.display ='none'
       
    }
    images[n].style.display ='block'
    

}
changenext()

prev.addEventListener('click',()=>{
    if(n>0){
    n--
    }
    else{
        n=images.length-1
    }
    changenext()

})


next.addEventListener('click',()=>{
    if (n<images.length){
        n++

    }
else{
        n=0
    }
    changenext()

})



let imageslider = document.querySelectorAll(".products")

for (const items of imageslider) {
    items.addEventListener('wheel',(e)=>{
e.preventDefault()
items.scrollLeft +=e.deltay
    })
    
}