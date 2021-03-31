import events from './events.js';
import faker from 'faker';

events.on('start', newOrder)
events.on('delievered', delievered)

function newOrder() {
  setInterval(() => {
    let fake = {
      storeName: faker.company.companyName(),
      orderId: faker.address.zipCode(),
      customerName: faker.name.findName(),
      address: faker.address.streetAddress()
    }

    console.log(`NEW ORDER: ITEM NEEDS TO BE PICKED UP \n
    ${fake.storeName}\n 
    ${fake.orderId}\n
    ${fake.customerName}\n
    ${fake.address}\n`)
    events.emit('pickup', fake)
  }, 5000)
}

function delievered(payload) {
  console.log(`PACKAGE DELIEVERED ${payload.orderId} ON ${new Date()}`)
}

export default {
  start: newOrder,
  delievered: delievered
}