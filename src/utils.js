export function debounce(func, time) {
  let timeout
  return function(...args) {
    if (timeout) {
      clearInterval(timeout)
    }
    timeout = setTimeout(() => {
      timeout = null
      func(...args)
    }, time)
  }
}