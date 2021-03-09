const { Book } = require('./models')

Book.create({
        isbn: "123-321-123",
        judul: "Ini judul buku 1",
        sinopsis: "Ini sinopsis buku 1",
        penulis: "Erwin",
        genre: "Pendidikan"
    })
    .then(book => {
        console.log(book)
    })