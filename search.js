const { Book } = require('./models')

Book.findAll().then(book => console.log(book))

Book.findOne({
        where: { id: 1 }
    })
    .then(book => console.log(book))