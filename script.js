function createTable() {
    //Write your code here
	const rows=parseInt(prompt("Input number of rows"));
	const coloums=parseInt(prompt("Input number of columns"));
    const table=document.getElementById("myTable");
	table.innerHTML = '';
	for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < columns; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
