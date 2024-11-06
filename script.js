const container = document.querySelector("#container");

function createGrid(m, n) {

    for (let i = 0; i < m; i++) {
        const rowItem = document.createElement("div")
        for (let j = 0; j < n; j++) {
            const columnItem = document.createElement("div")
            columnItem.className = "grid-row"
            rowItem.appendChild(columnItem);
        }
        container.appendChild(rowItem)
    }
}

createGrid(16, 16);