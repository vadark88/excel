export class TableSelection {
  static selectionClassName = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.unSelect()
    this.group.push($el)
    this.current = $el
    $el.focus().addClass(TableSelection.selectionClassName)
  }

  unSelect() {
    this.group.map($cell => $cell.removeClass(TableSelection.selectionClassName))
    this.group = []
  }

  selectGroup($elements = []) {
    this.unSelect()
    this.group = $elements
    this.group.forEach($el => $el.addClass(TableSelection.selectionClassName))
  }
}
