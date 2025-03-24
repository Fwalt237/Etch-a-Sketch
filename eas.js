const container = document.getElementById("container");
const gridButton = document.getElementById("gridButton");

function createGrid(size){
    container.innerHTML="";

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
   
    const squareSizeWidth = containerWidth/size;
    const squareSizeHeight = containerHeight/size;

    for(let i=0;i<size*size;i++){
        const divSquare = document.createElement("div");
        divSquare.classList.add("divSquare");
        divSquare.style.width = squareSizeWidth +"px";
        divSquare.style.height = squareSizeHeight + "px";
        divSquare.opacity = 0.1;

        divSquare.addEventListener("mouseover", ()=>{
            divSquare.opacity +=0.3;
            divSquare.style.backgroundColor="black";
            divSquare.style.opacity = divSquare.opacity;
        });
        container.appendChild(divSquare);
    }
}

gridButton.addEventListener("click", function(){
    let gridSize = prompt("Enter grid size (max 100):");
    gridSize = parseInt(gridSize);
    if(isNaN(gridSize) || gridSize<=0 || gridSize>100){
        console.log("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    createGrid(gridSize);
})
createGrid(16);