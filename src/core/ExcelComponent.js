import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options= {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.beforeInit();
    this.emitter = options.emitter
    this.unsubscribers = []
  }

  beforeInit() {

  }

  init() {
    this.initDOMListeners()
  }

  toHTML() {
    return ''
  }

  $emit(event, ...args) {
    this.emitter.fire(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
