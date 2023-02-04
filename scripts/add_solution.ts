import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { argv } from "process";
import { LANGUAGES } from "./constants/languages";
import type { Languages, LanguagesFlag } from "./constants/languages";

type CreateQuestionPathOptions = {
  readonly questionName: string[];
  readonly flag: string;
};

const isValidFlag = (flag: LanguagesFlag | string): flag is LanguagesFlag =>
  LANGUAGES.some(({ flag: langFlag }) => langFlag === flag);

const createReadmeContent = (question: string[]) => {
  const questionName = question
    .map((item) => item.replace(/\./g, ""))
    .join(" ");
  return `# ${questionName}\n\n## 💻 Description\n\n**Example 1**\n\n\`\`\`\n\n\`\`\`\n\n## 🔗 References\n\n[${questionName}]()\n\n[${questionName} explained by ]()`;
};

const createQuestionPath = ({
  questionName,
  flag,
}: CreateQuestionPathOptions) => {
  if (!isValidFlag(flag)) {
    throw new Error("Oops flag is not valid!");
  }

  const dirName = questionName
    .map((item) => item.replace(/\./gi, ""))
    .join("_");

  const rootDir: Languages = LANGUAGES.find(
    ({ flag: langFlag }) => langFlag === flag
  )!["name"];

  return `${rootDir}/${dirName}`;
};

const writeSolutionFile = async (
  questionPath: string,
  fileExtension: LanguagesFlag
) => {
  await writeFile(
    path.resolve(questionPath, `index.${fileExtension.replace(/-/, "")}`),
    ""
  );
};

const addSolution = async (args: string[]) => {
  try {
    const [flag, ...questionName] = args.slice(2) as [
      LanguagesFlag,
      ...string[]
    ];
    const questionPath = createQuestionPath({ questionName, flag });
    const readmeContent = createReadmeContent(questionName);

    await mkdir(questionPath);
    await writeFile(path.resolve(questionPath, "README.md"), readmeContent);
    await writeSolutionFile(questionPath, flag);
  } catch (error: any) {
    console.log(error.message);
  }
};

addSolution(argv);
