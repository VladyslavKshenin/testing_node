const fs = require("node:fs/promises");

fs.writeFile("write.txt", "Hello")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));