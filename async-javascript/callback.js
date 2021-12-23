// console.log('1. gorev');
// console.log('2. gorev');
// console.log('3. gorev');

// const func1 = () => {
//     console.log('Func 1 tamamlandı.');
// }

// const func2 = () => {
//     console.log('Func 2 tamamlandı.');
// }

// func2();
// func1();

/* const func1 = () => {
    console.log('Func 1 tamamlandı.');
    func2();
}

const func2 = () => {
    console.log('Func 2 tamamlandı.');
    func3();
}
const func3 = () => {
    console.log('Func 3 tamamlandı.');
}

func1(); */

/* const func1 = () => {
    console.log('Func 1 tamamlandı.');
    func3();
}

const func2 = () => {
    console.log('Func 2 tamamlandı.');
}
const func3 = () => {
    console.log('Func 3 tamamlandı.');
    func2();
}

func1(); */

/* let x = 5;
console.log(x);


setTimeout(() => {
    x = x+5;
    console.log(x);
}, 5000);

x = x+5;
console.log(x);
 */

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


const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

addBook({name: 'Kitap 4', author: 'Yazar4'}, listBooks);


/* listBooks();
console.log(books[3]); */