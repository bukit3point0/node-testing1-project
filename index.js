function trimProperties(obj) {
  const newObj = {...obj}
  Object.keys(newObj).map(o => newObj[o] = newObj[o].trim())
  return newObj
}

function trimPropertiesMutation(obj) {
  Object.keys(obj).forEach(o => {obj[o] = obj[o].trim()})
  return obj
}

function findLargestInteger(integers) {
  var highest = integers[0]
  Object.keys(integers).map(int => {
    if (integers[int].integer > highest.integer) {
      highest = integers[int]
    }
  })
  return highest.integer
}

class Counter {
  constructor(initialNumber) {
    this.number = initialNumber + 1
  }

  countDown() {
    // ✨ implement
    if (this.number > 0) {
      this.number -= 1
    } else {
      this.number
    }
    return this.number
  }
}

class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring']
    this.currentSeason = 'spring'
  }

  next() {
    let nextSeason = this.seasons.findIndex(foo => foo === this.currentSeason)

    this.currentSeason = this.seasons[nextSeason + 1]
    if(!this.currentSeason) {
      this.currentSeason = 'summer'
    }

    return this.currentSeason
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
