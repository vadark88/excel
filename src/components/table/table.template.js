
const CODES = {
  A: 65,
  Z: 90
}

const toCell = () => {
  return `
    <div class="cell selected" contenteditable=""></div>
  `
}

const toColumn = (colChar) => {
  return `
   <div class="column">${colChar}</div>
  `
}

const createRow = (num, content) => {
  return `
  <div class="row">
    <div class="row-info">${num}</div> 
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

    for (let i = 1; i <= rowsCount; i++) {
      const cells = new Array(colsCount).fill('').map(toCell).join('')
      rows.push(createRow(i,cells))
    }

  return rows.join('')
}
