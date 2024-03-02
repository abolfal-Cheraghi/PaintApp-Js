//chosse slector elemnts
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const brushWidth = document.querySelector('#brush-width');
const colorPicker = document.querySelector("#color-picker");
const brush = document.querySelector('.brush');
const eraser = document.querySelector(".eraser");
const btnClear = document.querySelector('.clear');
const btnsave = document.querySelector(".save");

//varibble's stroke width & color value & is drawing
let curentWidth = 5 ;

let curentColor = 'black';

let isDrawing = false ;

window.addEventListener('load' , (e)=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})



//handler event's mouse
function startDraw(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = curentWidth;
}
function endDraw(){
    isDrawing = false;
}

function draawing(e) {
    if(!isDrawing) return
    ctx.lineTo(e.offsetX , e.offsetY);
    ctx.stroke()
    ctx.strokeStyle = curentColor;
}


//event's mouse
canvas.addEventListener('mousedown' , startDraw);
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener('mousemove' , draawing);


//event's change | brush width | color stroke
brushWidth.addEventListener('change' , ()=>{
    curentWidth = brushWidth.value
})

colorPicker.addEventListener("change", () => {
  curentColor = colorPicker.value;
});


//event's brush & eraser
eraser.addEventListener("click", () => {
    eraser.classList.add('active')
    brush.classList.remove("active");
    curentColor = 'white';
});

brush.addEventListener("click", () => {
  brush.classList.add("active");
  eraser.classList.remove("active");
  curentColor = colorPicker.value;
});


//event's button's clear & save
btnClear.addEventListener('click' , ()=>{
    ctx.fillStyle = "white";
    ctx.fillRect(0 , 0  , canvas.width , canvas.height);
})

btnsave.addEventListener('click' , ()=>{
    let nameFile = prompt("نام فایل چی باشه :");
    let link = document.createElement('a');
    if(nameFile == ''){
        link.download = `${Date.now()}.png`;
    }else{
        link.download = `${nameFile}.png`;
    }
    
    link.href = canvas.toDataURL();
    link.click();
})



