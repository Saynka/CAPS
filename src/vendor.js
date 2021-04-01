const events = require('./events.js');
const faker = require('faker');
// import io from 'socket.io-client';



const host = 'http://75f6676d5379.ngrok.io';
// const socket = io.connect(host);
// socket.on('hi', payload => {
//   console.log('Wow, so polite!');
// });
// socket.on('welcome', payload => {
//   console.log(payload);
// });
// socket.emit('hello', faker.name.findName());

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

module.exports = {
  start: newOrder,
  delievered: delievered
}




// 'use strict';
// const faker = require('faker');
// const io = require('socket.io-client');
// const host = 'http://localhost:3000';