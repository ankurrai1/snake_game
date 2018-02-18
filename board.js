const createGrid = function(cell,rows){
  let cellIDCounter = 1;
  let numberOfCells = cell*rows;
  let body = document.getElementById("body");
  let table = document.createElement("table");
  for (var rowNumber = 1; rowNumber <= rows; rowNumber++) {
    let row = document.createElement("tr");
    row.id = "row"+rowNumber;
    for (var cellNumber = 1; cellNumber <= cell; cellNumber++) {
      let cell = document.createElement("td");
      cell.id = cellIDCounter;
      row.appendChild(cell);
      cellIDCounter++;
    }
    table.appendChild(row);
  }
  body.appendChild(table);
}