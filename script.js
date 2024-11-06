const container = document.querySelector("#container");

function createGrid(m, n) {
    for (let i = 0; i < m; i++) {
        const rowItem = document.createElement("div")
        rowItem.className = "grid-row"
        for (let j = 0; j < n; j++) {
            const columnItem = document.createElement("div")
            columnItem.className = "grid-column"
            columnItem.addEventListener("mouseover", () => columnItem.style.backgroundColor = "green")
            rowItem.appendChild(columnItem);
        }
        container.appendChild(rowItem)
    }
}

const btn = document.querySelector("#btn-grid")
btn.addEventListener("click", () => {
    const input = prompt("Enter the amount of squares you want")
    if (input > 100){
        prompt("The maximum number of squares is 100")
    }else{
        container.replaceChildren();
        createGrid(input, input)
    }
    
})

const rst = document.querySelector("#reset-grid");
rst.addEventListener("click", () => {
    const elements = container.querySelectorAll('*');
    elements.forEach(element => {
        element.style.backgroundColor = "white";
    })
})

createGrid(16, 16);