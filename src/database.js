'use strict'

var mongoose = require('mongoose')

mongoose.connect(
  'mongodb://seth:austin@ds061395.mlab.com:61395/mean-todo',
  function(err) {
    if (err) {
      console.log('Failed connecting to MongoDB!')
    } else {
      console.log('Successfully connected to MongoDB!')
    }
  }
)
