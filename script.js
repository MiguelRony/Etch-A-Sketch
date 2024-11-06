
const container = document.querySelector("#container");
let randomColors = true;

function createGrid(m, n) {
    for (let i = 0; i < m; i++) {
        const rowItem = document.createElement("div")
        rowItem.className = "grid-row"
        for (let j = 0; j < n; j++) {
            const columnItem = document.createElement("div")
            columnItem.className = "grid-column"
            rowItem.appendChild(columnItem);
        }
        container.appendChild(rowItem)
    }

    setSquaresActions();
    
}

function setSquaresActions(){
    const elementsRow = container.querySelectorAll('*');
    elementsRow.forEach(elem => {
        const elements = elem.querySelectorAll('*');
        elements.forEach(element => {
            element.addEventListener('mouseover', () => {
                const computedStyle = window.getComputedStyle(element)
                const backgroundColor = computedStyle.getPropertyValue('background-color')
                if(backgroundColor == 'rgba(0, 0, 0, 0)' || element.style.backgroundColor == "white"){
                    if (randomColors){
                        element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
                    }else{
                        element.style.backgroundColor = `green`
                    }
                    
                }
            })
        })
    })
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
rst.addEventListener("click", resetSquares)

function resetSquares() {
    const elements = container.querySelectorAll('*');
    elements.forEach(element => {
        element.style.backgroundColor = "white";
    })
}

const coloringBtn = document.querySelector("#coloring");
coloringBtn.addEventListener('click', ()=>{
    if (coloringBtn.textContent === "Simple coloring"){
        randomColors = false
        resetSquares();
        setSquaresActions();
        coloringBtn.textContent = "Random coloring"
    }else{
        randomColors = true
        resetSquares();
        setSquaresActions();
        coloringBtn.textContent = "Simple coloring"
    }
})
createGrid(16, 16);