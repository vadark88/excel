
const CODES = {
  A: 65,
  Z: 90
}

/*const toCell = (_, colIdx) => {
  return `
    <div class="cell selected" contenteditable="" data-col="${colIdx}">
    </div>
  `
}*/

function toCell(row) {
  return function(_, col) {
    return `
    <div class="cell"
        contentEditable="" 
        data-col="${col}"
        data-type="cell"
        data-id="${row}:${col}">
    </div>
`
  }
}

const toColumn = (colChar, idx) => {
  return `
   <div class="column" data-type="resizable" data-col="${idx}">
       ${colChar}
       <div class="col-resize" data-resize="col"></div>
   </div>
  `
}

const createRow = (num, content) => {
  const resizer = num ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
  <div class="row" data-type="resizable">
    <div class="row-info">
        ${num}
        ${resizer}
    </div> 
    <div class="row-data">${content}</div> 
  </div>
  `
}

const toChar = (_, idx) => String.fromCharCode(CODES.A + idx)

export function createTable(rowsCount= 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const columns = new Array(colsCount)
    .fill('').map(toChar).map(toColumn).join('')

  rows.push(createRow('', columns))

    for (let row = 0; row <= rowsCount; row++) {
      const cells = new Array(colsCount).fill('').map(toCell(row)).join('')
      rows.push(createRow(row,cells))
    }

  return rows.join('')
}
