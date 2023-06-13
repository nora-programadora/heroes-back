const mongoose = require('mongoose')

const url = 'mongodb+srv://noraprogramadora:nora12rita16@cluster0.prclhs5.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url)
.then((res) => console.log('Conexion a la base de datos exitosa'))

module.exports = mongoose