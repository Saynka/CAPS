const events = require('./events.js');

events.on('pickup', pickUp)
events.on('in-transit', inTransit)

function pickUp(payload) {
  setTimeout(() => {
    console.log(`PICKED UP: ORDER ID ${payload.orderId}`)
    events.emit('in-transit', payload)
  }, 1000)
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`ITEM IN TRANSIT: ORDER NUMBER: ${payload.orderId}\n`)
    events.emit('delievered', payload)
  }, 3000)
}

module.exports = {
  pickUp: pickUp,
  inTransit: inTransit
}

