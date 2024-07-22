const path = require("path");

const pathName = path.join("/content", "subcontent", "text.tsx");
console.log("this is directoe name", __filename);

const baseName = path.basename(pathName);
console.log("this is a baseName", baseName);
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subcontent",
  "text.txt"
);
// console.log("this is a path ", absolutePath);j
