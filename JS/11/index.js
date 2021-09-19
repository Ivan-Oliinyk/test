const btnAddRow = document.querySelector("#btnInsert");
const btnRemoveRow = document.querySelector("#btnRemove");
const table = document.querySelector("#sampleTable");

btnAddRow.addEventListener("click", addNewRow);
btnRemoveRow.addEventListener("click", remowRow);

function addNewRow() {
  const tableRows = document.querySelectorAll("#sampleTable tr");

  const newRow = `
    <tr>
      <td>Row${tableRows.length + 1} cell${1}</td>
      <td>Row${tableRows.length + 1} cell${2}</td>
    </tr>
  `;
  table.insertAdjacentHTML("beforeend", newRow);
}

function remowRow() {
  const tableRows = document.querySelectorAll("#sampleTable tr");
  const newArr = [];

  for (let i = 0; i < tableRows.length; i += 1) {
    newArr.push(`
      <tr>
        <td>Row${i + 1} cell${1}</td>
        <td>Row${i + 1} cell${2}</td>
      </tr>
    `);
  }

  table.innerHTML = " ";
  table.insertAdjacentHTML("beforeend", newArr.slice(0, -1).join(" "));
}
