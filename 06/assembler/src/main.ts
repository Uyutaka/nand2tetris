import { Parser } from "./parser";

const arg = process.argv;
const filePath = arg[2];
const parser = new Parser(filePath);
console.log(parser);

