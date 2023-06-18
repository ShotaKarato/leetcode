import { readdir, writeFile } from "fs/promises";
import path from "path";
import { getStats } from "./get_stats";

type DirectoryName = {
  readonly questionNumber: number;
  readonly questionTitle: string;
};

const createWholeText = async (dirNames: DirectoryName[]) => {
  const linkText = createLinkText(dirNames);
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

const createLinkText = (dirNames: DirectoryName[]) =>
  dirNames
    .map(
      ({ questionNumber, questionTitle }) =>
        `[${questionNumber} ${questionTitle}](/solutions/${questionNumber}_${questionTitle.replace(
          /\s/g,
          "_"
        )}/)\n\n`
    )
    .join("");

const formatDirNames = (dirName: string): DirectoryName => {
  const [questionNumber, ...questionTitle] = dirName.split("_");
  return {
    questionNumber: Number(questionNumber),
    questionTitle: questionTitle.join(" "),
  };
};

const updateReadme = async () => {
  try {
    const directories = (
      await readdir("solutions", {
        withFileTypes: true,
      })
    )
      .map((dir) => formatDirNames(dir.name))
      .sort((first, second) => first.questionNumber - second.questionNumber);

    await writeFile(
      path.join("", "README.md"),
      await createWholeText(directories)
    );
  } catch (error) {
    console.log(error);
  }
};

updateReadme();
