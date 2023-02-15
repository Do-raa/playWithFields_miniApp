const mydiv = document.querySelector(" div > div > div")
const addClass = document.querySelector(".classes-to-add")
const removeClass = document.querySelector(".classes-to-remove")
let reg = /\s+/ 

setNoClassesText()

addClass.addEventListener("blur", () =>{
    let myValue = addClass.value.trimStart() 
    let mySpan 
    mydiv.innerHTML == "No Classes To Show" && (mydiv.innerHTML = "" ) 
   
    //console.log(myValue.split(" "))
        myValue.split(" ").forEach(el => {  
                                if(el != "" ){
                                mySpan =document.createElement("span")  
                                mySpan.innerHTML = el.toLowerCase() 
                                mydiv.appendChild(mySpan)
                                }
                                })
    addClass.value = "" 

    let childNodes = mydiv.childNodes 
    childNodes = Array.from(mydiv.childNodes)

    childNodes.sort((a, b) => {
        let textA = a.textContent;
        let textB = b.textContent;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }); 
    for (let node of childNodes) {
        mydiv.appendChild(node);
    } 

}) 

removeClass.addEventListener("blur", () =>{ 
    let childNodes = mydiv.childNodes 
    let myValue = removeClass.value
    childNodes = Array.from(mydiv.childNodes)
    
    childNodes.forEach( node =>
                            myValue.toLowerCase().split(" ").forEach(el => el === node.textContent? mydiv.removeChild(node): null) 
                      )
    
    removeClass.value = ""  
    setNoClassesText()
})  

function setNoClassesText() {
  if (!mydiv.hasChildNodes()) {
    mydiv.innerHTML = "No Classes To Show"
    }
} 


