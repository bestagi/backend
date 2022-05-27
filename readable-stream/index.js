const fs = require("fs");

const readableStream = fs.createReadStream("./readable-stream/article.txt", {
    highWaterMark: 10
});

readableStream.on("readable", () => {
    try {
        process.stdout.write(`[
            ${readableStream.read()}
        ]`);
    } catch (error) {
        //Menangkap error
    }
});

readableStream.on("end", () => {
    console.log("Done");
});