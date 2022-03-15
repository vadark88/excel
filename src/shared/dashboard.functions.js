import {storage} from '@core/utils';

function toHtml(key) {
  const model = storage(key)
  const id = key.split(':')[1]
  return `
  <li class="db__record">
   <a href="#excel/${id}">${model.title}</a>
   <strong>
     ${new Date(model.openedDate).toLocaleDateString()}
     ${new Date(model.openedDate).toLocaleTimeString()}
   </strong>
  </li>
   `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    if (key.includes('excel'))
      keys.push(key)
  }

  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys()
  if (keys.isNotEmpty)
    return `
    <div class="db__list-header">
        <span>Название</span>
        <span>Дата открытия</span>
      </div>
      <ul class="db__list">
      ${keys.map(toHtml).join('')}
      </ul>
  `
  else
    return `<p>Пока нет ни одной таблицы </p>`
}

Array.prototype.isNotEmpty = () => {
  return Array.length !== 0
}
