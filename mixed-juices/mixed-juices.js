// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0
  let i = 0
  if (wedgesNeeded === 0) {
    return 0
  }
  for (; limes[i]; i++) {
    limes[i] === 'small' ? wedges += 6 : limes[i] === 'medium' ? wedges+= 8 : limes[i] === 'large' ? wedges += 10 : null
    if (wedges >= wedgesNeeded) {
      return i + 1
    }
  }
  return i
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    switch (orders[0]) {
      case 'Pure Strawberry Joy':
        timeLeft -= 0.5;
        orders.shift();
        break;
      case 'Energizer':
      case 'Green Garden':
        timeLeft -= 1.5;
        orders.shift();
        break;
      case 'Tropical Island':
        timeLeft -= 3;
        orders.shift();
        break;
      case 'All or Nothing':
        timeLeft -= 5;
        orders.shift();
        break;
      default:
        timeLeft -= 2.5;
        orders.shift();
    }
  }
  return orders
}
