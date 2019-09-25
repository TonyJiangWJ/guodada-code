/**
 * @param  {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 */
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
