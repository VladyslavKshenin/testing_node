const fs = require("node:fs/promises");

fs.appendFile("write.txt", "I like it\n")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
    