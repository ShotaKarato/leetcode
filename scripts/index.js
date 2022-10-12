"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const createWholeText = (dirNames) => {
    const linkTexts = createLinkTexts(dirNames);
    const wholeText = `# 超ド文系なのに気合と根性で LeetCode を解く奴
  高校時代、確率のテストで 3/100 点を叩き出して二子玉川の河川敷で答案用紙を燃やした超絶ド文系が気合と根性でLeetCodeのアルゴリズムに挑む物語です。
  
  あの時の焦げた答案用紙の匂いは今でも忘れられません。


  あたたかく見守っていただけると幸いです。

  ## Solutions
  ${linkTexts}
  `;
    return wholeText;
};
const createLinkTexts = (dirNames) => {
    return dirNames
        .map(({ questionNumber, questionTitle }) => `[${questionNumber} ${questionTitle}](/${questionNumber}_${questionTitle.replace(/\s/g, "_")}/)\n\n`)
        .join("");
};
const updateReadme = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dirContents = yield (0, promises_1.readdir)(path_1.default.join(__dirname, ".."), {
            withFileTypes: true,
        });
        const dirNames = dirContents
            .filter((dirContent) => dirContent.isDirectory() && !isException(dirContent))
            .map((dir) => formatDirNames(dir.name))
            .sort((first, second) => first.questionNumber - second.questionNumber);
        yield (0, promises_1.writeFile)(path_1.default.resolve(__dirname, "README.md"), createWholeText(dirNames));
    }
    catch (error) {
        console.log(error);
    }
});
const isException = (dirContent) => {
    const exceptionalDirectories = [
        ".git",
        ".github",
        ".vscode",
        "node_modules",
        "scripts",
    ];
    return exceptionalDirectories.some((dir) => dir === dirContent.name);
};
const formatDirNames = (dirName) => {
    const [questionNumber, ...questionTitle] = dirName.split("_");
    return {
        questionNumber: Number(questionNumber),
        questionTitle: questionTitle.join(" "),
    };
};
updateReadme();
