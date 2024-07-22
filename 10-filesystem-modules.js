const fs = require("fs");

const aashik = fs.readFileSync("./content/subcontent/text.tsx", "utf8");
const wirte = fs.writeFileSync(
  "./content/subcontent/trail.tsx",
  "this is the trail i am doing to teach me mentally and physicaly"
);
console.log("hello aashik", aashik);
