let button=document.getElementById("btn");
button.addEventListener("click",()=>{
document.querySelector(".box").innerHTML="<b>Yeah yoy were clicked</b>Enjoy your click"})

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child Was clicked")
})
document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childContainer Was clicked")
})
document.querySelector(".container").addEventListener("click", (e) => {
    alert("container Was clicked")
})