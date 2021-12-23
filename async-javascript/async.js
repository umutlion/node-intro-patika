/* function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınmaya çalışılıyor...");

    if (data) {
      resolve("Veriler alındı");
    } else {
      reject("Veriler alınamadı...");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor...");

    if (receivedData) {
      resolve("Veriler düzenlendi");
    } else {
      reject("Veriler düzenlenemedi...");
    }
  });
}

// Async - await

async function processData() {
  try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
  } catch (err) {
    console.log(err);
  }
}

processData();
 */

const books = [
  { name: "Kitap 1", author: "Yazar1" },
  { name: "Kitap 2", author: "Yazar2" },
  { name: "Kitap 3", author: "Yazar3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    // resolve(books);
    reject("BIR HATA OLUSTU");
  });

  return promise1;
};

/* addBook({ name: "Kitap 41", author: "Yazar 41" })
  .then(() => {
    console.log("YENI LISTE");
    listBooks();
  })
  .catch((err) => {
    console.log(err);
  });
 */

async function showBooks() {
  try {
    await addBook({ name: "Kitap 12", author: "YAZAR 12" });
    listBooks();
  } catch (err) {
    console.log(err);
  }
}

showBooks();
