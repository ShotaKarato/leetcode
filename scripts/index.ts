import { Dirent } from "fs";
import { readdir, writeFile } from "fs/promises";
import path from "path";

type DirNameType = {
  readonly questionNumber: number;
  readonly questionTitle: string;
};

const createWholeText = (dirNames: DirNameType[]) => {
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

const createLinkTexts = (dirNames: DirNameType[]) => {
  return dirNames
    .map(
      ({ questionNumber, questionTitle }) =>
        `[${questionNumber} ${questionTitle}](/${questionNumber}_${questionTitle.replace(
          /\s/g,
          "_"
        )}/)\n\n`
    )
    .join("");
};

const updateReadme = async () => {
  try {
    const dirContents = await readdir(path.join(__dirname, ".."), {
      withFileTypes: true,
    });
    const dirNames = dirContents
      .filter(
        (dirContent) => dirContent.isDirectory() && !isException(dirContent)
      )
      .map((dir) => formatDirNames(dir.name))
      .sort((first, second) => first.questionNumber - second.questionNumber);
    await writeFile(
      path.resolve(__dirname, "README.md"),
      createWholeText(dirNames)
    );
  } catch (error) {
    console.log(error);
  }
};

const isException = (dirContent: Dirent) => {
  const exceptionalDirectories = [
    ".git",
    ".github",
    ".vscode",
    "node_modules",
    "scripts",
  ];
  return exceptionalDirectories.some((dir) => dir === dirContent.name);
};

const formatDirNames = (dirName: string): DirNameType => {
  const [questionNumber, ...questionTitle] = dirName.split("_");
  return {
    questionNumber: Number(questionNumber),
    questionTitle: questionTitle.join(" "),
  };
};

updateReadme();
