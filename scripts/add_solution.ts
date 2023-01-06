import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { argv } from "process";
import { LANGUAGES } from "./constants/languages";

const isValidFlag = (flag: string) =>
  LANGUAGES.some(({ flag: languageFlag }) => languageFlag === flag);

const removeDot = (item: string) => item.replace(/\./gi, "");

const addSolution = async (args: string[]) => {
  const [, , flag, ...questionName] = args;
  if (!isValidFlag(flag)) {
    throw new Error("Oops flag is not valid!");
  }
  const dirName = questionName.map((item) => removeDot(item)).join("_");
  let rootDir: string = "";
  LANGUAGES.forEach((lang) => {
    if (lang.flag === flag) {
      rootDir = lang.name;
    }
  });
  const questionPath = `${rootDir}/${dirName}`;

  await mkdir(questionPath);
  await writeFile(path.resolve(questionPath, "README.md"), "");
  await writeFile(path.resolve(questionPath, "index.ts"), "");
};

addSolution(argv);
