const { Book } = require('./models')

Book.destroy({
        where: {
            id: 1
        }
    })
    .then(() => console.log("Buku: id 1 didelete"))