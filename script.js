let container = document.querySelector(".container");
for(let i=0; i<16; i++)
{
    for(let j=0; j<16; j++)
    {
        let gridbox = document.createElement("div");
        gridbox.classList.add("gridbox");
        gridbox.addEventListener("mouseover", (e) => {
            e.target.style.background = "gray";
        });
        container.appendChild(gridbox);
    }
}