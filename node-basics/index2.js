const fs = require('fs');


/* // Read File

fs.readFile('password.txt', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU');
});

// Write File

fs.writeFile('example.json', '{"name": "Umut", "age": 6}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('JSON DOSYA BAŞARILI BİR ŞEKİLDE OLUTŞRULDU')

});

// ADD DATA

fs.appendFile('example.txt', '\n Yeni eklenen satır', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('YENİ DOSYA BAŞARILI BİR ŞEKİLDE EKLENDİ')

});

// DELETE FILE

fs.unlink('example.json', (err) => {
    if (err) console.log(err);
    console.log('Dosya silindi')
}) 

// CREATE DIRECTORIES

fs.mkdir('uploads/img', {recursive:true}, (err) => {
    if(err) console.log(err);
    console.log('Klasör(ler) oluşturuldu')
}) */

// DELETE DIRECTORIES

fs.rmdir('uploads', {recursive:true}, (err) => {
    if(err) console.log(err);
    console.log('Klasör(ler) oluşturuldu')
})