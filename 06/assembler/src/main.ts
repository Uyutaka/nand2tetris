import { Parser } from "./parser";

const arg = process.argv;
const filePath = arg[2];
const parser = new Parser(filePath);
while (parser.hasMoreCommands()) {
    parser.advance();
    console.log(parser.commandType());
}
// console.log(parser);
// console.log("aaaa");

