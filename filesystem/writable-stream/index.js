const fs = require("fs");

const writableStream = fs.createWriteStream("./filesystem/writable-stream/output.txt");

writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.end("Akhir dari writable stream!");