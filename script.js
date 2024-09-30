let elem = document.getElementById("element")
let container = document.getElementById("container")
let code = document.getElementById("code")
let inputs= document.querySelectorAll(".sliders input")
let value =document.getElementById('border-radius')


inputs.forEach((inp) => inp.addEventListener("input",generateShadow))

function generateShadow(){
    let hShadow=document.getElementById("h-shadow").value

    let vShadow=document.getElementById("v-shadow").value

    let blurRadius=document.getElementById("blur-radius").value
    
    
    let spreadRadius=document.getElementById("spread-radius").value
    
    let shadowColor=document.getElementById("shadow-color").value
    
    let shadowColorOpacity=document.getElementById("shadow-color-opacity").value
    
    let shadowInset=document.getElementById("shadow-inset").checked 
    

    


    // using ternary operator in check if insetckeckbox is checked or not
    //if checked we add the inset prefix
    //eles on inset prefix is added 
    let boxShadow=shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,shadowColorOpacity)} `:
    `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,shadowColorOpacity)}  `

    elem.style.boxShadow = boxShadow
    elem.style.background = document.getElementById('box-color').value
    container.parentElement.style.background = document.getElementById('box-color').value
    container.style.borderRadius = `${value.value}px`
    elem.style.borderRadius = `${value.value}px`

    code.textContent=`box-shadow: ${boxShadow}`

    // console.log(value.value)

}

//converting  hex value to rgba
function hexToRgba(shadowColor,shadowColorOpacity){
    let r=parseInt(shadowColor.substr(1, 2), 16)

    let g=parseInt(shadowColor.substr(3, 2), 16)

    let b=parseInt(shadowColor.substr(5, 2), 16)
    return `rgba(${r},${b},${b},${shadowColorOpacity})`
}




//copy the generated code to clipboard
 function copyCode(){
     code.select()
    document.execCommand("copy")
    alert("Code Copied To Clipboard")
}

//call the generateShadow function on every page load
window.onload=generateShadow()




