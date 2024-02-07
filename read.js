const fs = require("node:fs/promises");

fs.readFile("write.txt", { encoding: "utf-8" })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));