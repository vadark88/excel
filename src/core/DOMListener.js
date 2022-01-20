import {capitalize} from '@core/utils';

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root)
      throw new Error('No $root provided')

    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listenerName => {
      const method = getMethodName(listenerName)
      if (!this[method])
        throw new Error(`Нет метода ${method} в классе ${this.name}`)
      this[method] = this[method].bind(this)
      this.$root.on(listenerName, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listenerName => {
      const method = getMethodName(listenerName)
      this.$root.off(listenerName, this[method])
    })
  }
}

const getMethodName = (eventName) => 'on' + capitalize(eventName)
