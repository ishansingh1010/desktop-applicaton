const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/desktopApplication', {
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is Connected")
})
mongoose.connection.on('error', (error) => {
    console.log('Mongoose connection error!')
    console.log(`Error: ${error}`)
})
