const button =document.querySelector("button");
const body=document.querySelector("body");
const color=["blue","black","red","purple","pink"];
body.style.backgroundcolor='violet';
button.addEventListener('click',changebackGround)
function changebackGround(){
    const colorindex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorindex]
}