const DEFAULT_GRID_SIZE = 16;

let container = document.querySelector(".container");

function drawGrid(size)
{
    while(container.firstChild != null)
        container.firstChild.remove();
    
    for(let i=0; i<size; i++)
    {
        for(let j=0; j<size; j++)
        {
            let gridbox = document.createElement("div");

            gridbox.classList.add("gridbox");
            gridbox.style.width = 960/size + "px";
            gridbox.style.height = 960/size + "px";
            
            gridbox.addEventListener("mouseover", (e) => {
                e.target.style.background = "gray";
            });
            
            container.appendChild(gridbox);
        }
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let oldGridSize = document.querySelector("#grid-size");

    let newGridSize = Number.parseInt(prompt("Enter the new grid size: ", oldGridSize.textContent));
    if(Number.isNaN(newGridSize))
        newGridSize = Number.parseInt(oldGridSize.textContent);
    else if(newGridSize < 1)
        newGridSize = 1;
    else if(newGridSize > 100)
        newGridSize = 100

    drawGrid(newGridSize);

    oldGridSize.textContent = newGridSize;
})

drawGrid(DEFAULT_GRID_SIZE);