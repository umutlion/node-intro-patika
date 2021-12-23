/* const promise1 = new Promise((resolve, reject) => {
    resolve('VERILER ALINDI');
    reject('BAGLANTI HATASI');
});

// console.log(promise1);

promise1
    .then(value => {
        console.log(value);
    }).catch(err => {
        console.log(err);
}); */

const books = [
    {name: 'Kitap 1', author: 'Yazar1'},
    {name: 'Kitap 2', author: 'Yazar2'},
    {name: 'Kitap 3', author: 'Yazar3'},
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};


const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        // resolve(books);
        reject('BIR HATA OLUSTU');
    })

    return promise1;
};

addBook({name: 'Kitap 41', author: 'Yazar 41'})
    .then(() => {
        console.log('YENI LISTE');
        listBooks(); 
    }).catch((err) => {
        console.log(err);
    })