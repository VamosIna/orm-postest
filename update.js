const { Book } = require('./models')

const query = {
    where: { id: 1 }
}

Book.update({
        judul: "buku dengan id 1 sudah aku ganti judulnya"
    }, query)
    .then(() => {
        console.log("buku dengan id 1 sudah aku ganti judulnya")
    })
    .catch(err => {
        console.error("Gagal mengupdate juduk buku")
    })