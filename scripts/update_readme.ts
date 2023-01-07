import { Dirent } from "fs";
import { readdir, writeFile } from "fs/promises";
import path from "path";
import { getStats } from "./get_stats";

type DirectoryName = {
  readonly questionNumber: number;
  readonly questionTitle: string;
};
type DirectoryMap = Record<string, DirectoryName[] | []>;
type LinkMap = ReturnType<typeof createLinkMap>;

const createWholeText = async (dirMap: DirectoryMap) => {
  const linkMap = createLinkMap(dirMap);
  const linkText = createLinkText(linkMap);
  const statsBadges = await getStats();

  const wholeText = `# 超ド文系なのに気合と根性で LeetCode を解く奴
  高校時代、確率のテストで 3/100 点を叩き出して二子玉川の河川敷で答案用紙を燃やした超絶ド文系が気合と根性でLeetCodeのアルゴリズムに挑む物語です。

  あの時の焦げた答案用紙の匂いは今でも忘れられません。

  あたたかく見守っていただけると幸いです。

  ## Summary
  ${statsBadges}

  ## Solutions
  ${linkText}
  `;

  return wholeText;
};

const createLinkText = (linkMap: LinkMap) => {
  let linkText: string = "";
  for (let key in linkMap) {
    linkText += `### ${key}\n${linkMap[key]}`;
  }
  return linkText;
};

const createLinkMap = (dirMap: DirectoryMap) => {
  const linkMap: Record<keyof DirectoryMap, string> = {};
  for (let key in dirMap) {
    if (dirMap[key].length > 0) {
      linkMap[key] = dirMap[key]
        .map(
          ({ questionNumber, questionTitle }) =>
            `[${questionNumber} ${questionTitle}](/${key}/${questionNumber}_${questionTitle.replace(
              /\s/g,
              "_"
            )}/)\n\n`
        )
        .join("");
    }
  }
  return linkMap;
};

const updateReadme = async () => {
  try {
    const targetDirectories = (
      await readdir(path.join(__dirname, ".."), {
        withFileTypes: true,
      })
    ).filter((targetDir) => targetDir.isDirectory() && !isException(targetDir));

    const directoryMap: DirectoryMap = {};

    for (let dir of targetDirectories) {
      const directories = (
        await readdir(dir.name, {
          withFileTypes: true,
        })
      )
        .map((directory) => formatDirNames(directory.name))
        .sort((first, second) => first.questionNumber - second.questionNumber);
      directoryMap[dir.name] = directories;
    }

    await writeFile(
      path.resolve(__dirname, "README.md"),
      await createWholeText(directoryMap)
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
    "utils",
    "graphql",
    "types",
  ];
  return exceptionalDirectories.some((dir) => dir === dirContent.name);
};

const formatDirNames = (dirName: string): DirectoryName => {
  const [questionNumber, ...questionTitle] = dirName.split("_");
  return {
    questionNumber: Number(questionNumber),
    questionTitle: questionTitle.join(" "),
  };
};

updateReadme();
