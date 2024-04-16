import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { argv } from "process";
import { LANGUAGES } from "./constants/languages";
import type { LanguagesFlag } from "./constants/languages";
import { access, constants } from "fs/promises";

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
  return `solutions/${dirName}`;
};

// Create Readme
const createReadme = async (questionPath: string, readmeContent: string) => {
  await writeFile(questionPath, readmeContent);
};

// Create Solution
const createSolution = async (
  questionPath: string,
  fileExtension: LanguagesFlag
) => {
  await writeFile(
    path.resolve(questionPath, `index.${fileExtension.replace(/-/, "")}`),
    "",
    { flag: "wx" }
  );
};

const addSolution = async (args: string[]) => {
  const flagIndex = args.findIndex((arg) =>
    LANGUAGES.some(({ flag }) => flag === arg)
  );

  if (flagIndex < 0) throw new Error("Oops! Flag is missing!");

  const flag = args[flagIndex] as LanguagesFlag;
  const questionName =
    flagIndex === args.length - 1
      ? args.slice(2, flagIndex - 1)
      : args.slice(4);

  const questionPath = createQuestionPath({ questionName, flag });
  try {
    await access(questionPath, constants.W_OK);
    await createSolution(questionPath, flag);
  } catch {
    const readmeContent = createReadmeContent(questionName);
    await mkdir(questionPath);
    await createReadme(path.resolve(questionPath, "README.md"), readmeContent);
    await createSolution(questionPath, flag);
  }
};

addSolution(argv);
