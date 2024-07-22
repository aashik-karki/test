const second = readFileSync("./content/second.txt", "utf8");
writeFileSync(
  "./content/result-sync.txt",
  `Here is the  result:${first}, ${second}`,
  { flag: "a" }
);
console.log("this is a first", first, second);
